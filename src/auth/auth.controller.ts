import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login2() {
    return 'ok';
  }
  @Post('register')
  register() {
    return 'ok';
  }
}
