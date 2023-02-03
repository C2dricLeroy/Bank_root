import { Module } from '@nestjs/common';
import { BankAccountService } from './bank_account.service';
import { BankAccountController } from './bank_account.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [PrismaModule, CustomersModule],
  controllers: [BankAccountController],
  providers: [BankAccountService],
})
export class BankAccountModule {}
