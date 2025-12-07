import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  LoginBodyDto,
  LogoutBodyDto,
  RefreshTokenBodyDto,
  RegisterBodyDto,
} from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterBodyDto) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: LoginBodyDto) {
    return this.authService.login(body);
  }

  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  refreshToken(@Body() body: RefreshTokenBodyDto) {
    return this.authService.refreshToken(body);
  }

  @Post('logout')
  async logout(@Body() body: LogoutBodyDto) {
    return this.authService.logout(body);
  }
}
