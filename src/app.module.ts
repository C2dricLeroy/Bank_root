import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module.js';
import { CustomersModule } from './customers/customers.module';
import { BankAccountModule } from './bank_account/bank_account.module';

@Module({
  imports: [AuthModule, CustomersModule, BankAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
