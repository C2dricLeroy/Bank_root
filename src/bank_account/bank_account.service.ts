import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank_account.dto';
import { UpdateBankAccountDto } from './dto/update-bank_account.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BankAccountService {
  constructor(private prisma: PrismaService) {}
  create(createBankAccountDto: CreateBankAccountDto) {
    return 'This action adds a new bankAccount';
  }

  findAll() {
    return this.prisma.bank_account.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} bankAccount`;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
