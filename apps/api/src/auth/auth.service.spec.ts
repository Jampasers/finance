import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../common/prisma.service';

describe('AuthService', () => {
  let service: AuthService;

  const prismaMock = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: new JwtService({ secret: 'test-secret' }),
        },
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = moduleRef.get(AuthService);
    prismaMock.user.findUnique.mockReset();
    prismaMock.user.create.mockReset();
  });

  it('register bikin user baru dan token', async () => {
    prismaMock.user.findUnique.mockResolvedValue(null);
    prismaMock.user.create.mockResolvedValue({
      id: 'u1',
      fullName: 'Budi',
      shopName: 'Warung Budi',
      email: 'budi@warung.id',
      passwordHash: 'hash',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
    });

    const result = await service.register({
      fullName: 'Budi',
      shopName: 'Warung Budi',
      email: 'budi@warung.id',
      password: 'password123',
    });

    expect(result.user.email).toBe('budi@warung.id');
    expect(result.accessToken).toBeTruthy();
  });
});
