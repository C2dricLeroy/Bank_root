import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module.js';
// import { Bank_accountService } from './bank_account/bank_account.service.js';
// import { CustomerModule } from './customer/customer.module';
//import { CustomerService } from './customer/customer.service.js';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [AuthModule, CustomersModule, /*Bank_accountService, CustomerService*/ ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
