import { IsOptional, IsString, MinLength } from 'class-validator';
import type { CreateLeadInput } from '@finance/types';

export class CreateLeadDto implements CreateLeadInput {
  @IsString()
  @MinLength(2)
  fullName!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  @MinLength(2)
  shopName!: string;

  @IsOptional()
  @IsString()
  note?: string;
}
