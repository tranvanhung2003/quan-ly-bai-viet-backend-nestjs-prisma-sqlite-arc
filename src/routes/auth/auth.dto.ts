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

export class RegisterResponseDto {
  @Exclude()
  password: string;

  constructor(object: Record<string, any>) {
    Object.assign(this, object);
  }
}

export class RefreshTokenBodyDto {
  @IsString()
  refreshToken: string;
}

export class LogoutBodyDto extends RefreshTokenBodyDto {}
