import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { BankAccountModule } from './bank_account/bank_account.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [CustomersModule, BankAccountModule, AuthModule, PassportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
