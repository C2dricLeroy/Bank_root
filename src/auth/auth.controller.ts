import {
  Controller,
  Post,
  Get,
  HttpCode,
  Body,
  Req,
  ValidationPipe,
  Param,
  UsePipes,
  Render,
} from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/')
  @Render('connexion')
  Connexion() {}
}
