import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { BankAccountModule } from './bank_account/bank_account.module';

@Module({
  imports: [CustomersModule, BankAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
