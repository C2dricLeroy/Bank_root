import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@UseGuards(AuthGuard('local'))*/
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
