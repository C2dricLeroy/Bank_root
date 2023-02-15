import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [CustomersModule],
  providers: [AuthService],
})
export class AuthModule {}
