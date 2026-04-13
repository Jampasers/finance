import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import type { AuthResponse } from '@finance/types';
import { PrismaService } from '../common/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<AuthResponse> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (existingUser) {
      throw new BadRequestException('Email udah kepake.');
    }

    const user = await this.prisma.user.create({
      data: {
        fullName: dto.fullName.trim(),
        shopName: dto.shopName.trim(),
        email: dto.email.toLowerCase(),
        passwordHash: await hash(dto.password, 10),
      },
    });

    return this.toAuthResponse(user);
  }

  async login(dto: LoginDto): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user) {
      throw new UnauthorizedException('Email atau password salah.');
    }

    const passwordMatches = await compare(dto.password, user.passwordHash);

    if (!passwordMatches) {
      throw new UnauthorizedException('Email atau password salah.');
    }

    return this.toAuthResponse(user);
  }

  private toAuthResponse(user: {
    id: string;
    fullName: string;
    shopName: string;
    email: string;
    createdAt: Date;
  }): AuthResponse {
    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      shopName: user.shopName,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        fullName: user.fullName,
        shopName: user.shopName,
        email: user.email,
        createdAt: user.createdAt.toISOString(),
      },
    };
  }
}

