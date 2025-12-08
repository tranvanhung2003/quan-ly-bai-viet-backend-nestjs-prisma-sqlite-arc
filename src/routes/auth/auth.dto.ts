import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { Match } from 'src/shared/decorators/custom-validator.decorator';

export class LoginBodyDto {
  @IsString()
  email: string;

  @IsString()
  @Length(6, 20)
  password: string;
}

export class RegisterBodyDto extends LoginBodyDto {
  @IsString()
  name: string;

  @IsString()
  @Match('password')
  confirmPassword: string;
}

export class RegisterResponseDto implements User {
  id: number;
  email: string;
  name: string;
  @Exclude()
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<RegisterResponseDto>) {
    Object.assign(this, partial);
  }
}

export class RefreshTokenBodyDto {
  @IsString()
  refreshToken: string;
}

export class LogoutBodyDto extends RefreshTokenBodyDto {}
