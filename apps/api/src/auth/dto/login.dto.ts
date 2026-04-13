import { IsEmail, IsString, MinLength } from 'class-validator';
import type { AuthLoginInput } from '@finance/types';

export class LoginDto implements AuthLoginInput {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}

