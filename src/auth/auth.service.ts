import { Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private customersService: CustomersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(pass: string, username: string): Promise<any> {
    const user = await this.customersService.findByUsername({
      Username: username,
    });
    if (user && user?.Username === username && user.Password === pass) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.password, loginDto.username);

    if (!user) {
      return 'Wrong Username or invalid password';
    } else {
      const payload = { username: user.Username, sub: user.Password };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
