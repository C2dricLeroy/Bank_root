import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank_account.dto';
import { UpdateBankAccountDto } from './dto/update-bank_account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { BankAccount } from './entities/bank_account.entity';

@Injectable()
export class BankAccountService {
  constructor(private prisma: PrismaService) {}
  create(createBankAccountDto: CreateBankAccountDto) {
    return 'This action adds a new bankAccount';
  }

  findAll() {
    return this.prisma.bank_account.findMany();
  }
  //Get account by Id
  async findOneAccount(
    bank_accountWhereInput: Prisma.Bank_accountWhereInput,
  ): Promise<BankAccount | null> {
    return this.prisma.bank_account.findFirst({
      where: bank_accountWhereInput,
    });
  }

  async getAccount(bankAccountId) {
    return await this.findOneAccount({ Id: parseInt(bankAccountId) });
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
