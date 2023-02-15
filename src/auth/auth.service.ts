import { Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AuthService {
  constructor(private customersService: CustomersService) {}

  async validateUser(id: number, pass: string, username: string): Promise<any> {
    const user = await this.customersService.findByUsername(username);
    if (id && user?.Username === username && user.Password === pass) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }
}
