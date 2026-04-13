import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateLeadDto) {
    return this.prisma.lead.create({
      data: {
        fullName: dto.fullName.trim(),
        phone: dto.phone?.trim(),
        shopName: dto.shopName.trim(),
        note: dto.note?.trim(),
      },
    });
  }
}

