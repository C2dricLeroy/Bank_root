import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank_account.dto';
import { UpdateBankAccountDto } from './dto/update-bank_account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Bank_account, prisma } from '@prisma/client';
import { BankAccountController } from './bank_account.controller';

@Injectable()
export class BankAccountService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateBankAccountDto) {
    const newAccount = await this.prisma.bank_account.create({
      data: {
        Balance: 0,
        owner_id: dto.owner_id,
        admin_id: 2,
        log_id: dto.log_id,
      },
    });
    console.log(`the bank_account with Id ${newAccount.Id} have been created`);
  }

  findAll() {
    return this.prisma.bank_account.findMany();
  }
  //Get account by Id
  async findOneAccount(
    bank_accountWhereInput: Prisma.Bank_accountWhereInput,
  ): Promise<Bank_account | null> {
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

  async getBalance(id: number) {
    const account: Bank_account = await this.prisma.bank_account.findUnique({
      where: { Id: +id },
    });

    return account.Balance !== 0
      ? 'The account need to be empty to be deleted.'
      : this.remove({ Id: id });
  }

  async remove(
    bankAccountToDelete: Prisma.Bank_accountWhereUniqueInput,
  ): Promise<Bank_account | null> {
    console.log(
      `The account with id ${bankAccountToDelete.Id} have been deleted`,
    );
    return this.prisma.bank_account.delete({ where: bankAccountToDelete });
  }
}
