import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank_account.dto';
import { UpdateBank_accountDto } from './dto/update-bank_account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Bank_account } from '@prisma/client';
import { updateBalanceDTO } from './dto/updateBalanceDTO.dto';

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
    console.log(`the bank_account with Id ${newAccount.Id} has been created`);
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

  // Update bank account information
  async update(id: number, dto: UpdateBank_accountDto) {
    console.log(`The bank_account with Id ${id} has been updated. `);
    return this.prisma.bank_account.update({
      where: { Id: id },
      data: {
        owner_id: dto.owner_id,
      },
    });
  }

  async findByUserLastname(user_lastname) {
    return this.prisma.bank_account.findMany({
      where: user_lastname,
    });
  }

  async addMoney(dto: updateBalanceDTO) {
    const account = await this.getAccount(dto.Id);
    if (!account) {
      return `The account with Id ${dto.Id} does not exist.`;
    } else {
      console.log('test');
      return await this.updateAmount({
        where: {
          Id: account.Id,
        },
        data: {
          Balance: account.Balance + dto.amountToAdd,
        },
      });
    }
  }

  // Withdraw Money
  async withdrawMoney(dto: updateBalanceDTO) {
    const account = await this.getAccount(dto.Id);
    if (!account) {
      return `The account with Id ${dto.Id} does not exist.`;
    } else {
      console.log('test');
      return await this.updateAmount({
        where: {
          Id: account.Id,
        },
        data: {
          Balance: account.Balance - dto.amountToAdd,
        },
      });
    }
  }

  async updateAmount(params: {
    where: any;
    data: Prisma.Bank_accountUpdateInput;
  }): Promise<Bank_account> {
    const { where, data } = params;
    console.log(
      `The account ${params.where.Id} has been updated. Your new sold is ${data.Balance}`,
    );
    return this.prisma.bank_account.update({
      data,
      where,
    });
  }

  // Delete Id if Balance = 0
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
      `The account with id ${bankAccountToDelete.Id} has been deleted`,
    );
    return this.prisma.bank_account.delete({ where: bankAccountToDelete });
  }
}
