// import { Injectable } from '@nestjs/common';
// import { Bank_account, Prisma } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service.js';

// @Injectable()
// export class Bank_accountService {
//   constructor(private prisma: PrismaService) {}

//   async bank_account(
//     bank_accountWhereUniqueInput: Prisma.Bank_accountWhereUniqueInput,
//   ): Promise<Bank_account | null> {
//     return this.prisma.bank_account.findUnique({
//       where: bank_accountWhereUniqueInput,
//     });
//   }

//   async bank_accounts(params: {
//     skip?: number;
//     take?: number;
//     cursor?: Prisma.Bank_accountWhereUniqueInput;
//     where?: Prisma.Bank_accountWhereInput;
//     orderBy?: Prisma.Bank_accountOrderByWithRelationInput;
//   }): Promise<Bank_account[]> {
//     const { skip, take, cursor, where, orderBy } = params;
//     return this.prisma.bank_account.findMany({
//       skip,
//       take,
//       cursor,
//       where,
//       orderBy,
//     });
//   }

//   async createBank_account(data: Prisma.Bank_accountCreateInput): Promise<Bank_account> {
//     return this.prisma.bank_account.create({
//       data,
//     });
//   }

//   async updateBank_account(params: {
//     where: Prisma.Bank_accountWhereUniqueInput;
//     data: Prisma.Bank_accountUpdateInput;
//   }): Promise<Bank_account> {
//     const { data, where } = params;
//     return this.prisma.bank_account.update({
//       data,
//       where,
//     });
//   }

//   async deleteBank_account(where: Prisma.Bank_accountWhereUniqueInput): Promise<Bank_account> {
//     return this.prisma.bank_account.delete({
//       where,
//     });
//   }
// }