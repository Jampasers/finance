import { IsEmail, IsString, MinLength } from 'class-validator';
import type { AuthRegisterInput } from '@finance/types';

export class RegisterDto implements AuthRegisterInput {
  @IsString()
  @MinLength(2)
  fullName!: string;

  @IsString()
  @MinLength(2)
  shopName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}

