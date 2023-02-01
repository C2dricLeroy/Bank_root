// src/articles/articles.module.ts

import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CustomersController } from './customers.controller.js';
import { CustomersService } from './customers.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [CustomersController],
  providers: [CustomersService, ],
})
export class CustomersModule {}
