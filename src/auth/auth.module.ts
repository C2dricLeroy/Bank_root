import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomersModule } from '../customers/customers.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [CustomersModule, PassportModule],
  providers: [AuthService, LocalStrategy, PrismaService],
})
export class AuthModule {}
