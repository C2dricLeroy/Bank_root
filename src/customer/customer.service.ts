// import { Injectable } from '@nestjs/common';
// import { Customer, Prisma } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service.js';

// @Injectable()
// export class CustomerService {
//   constructor(private prisma: PrismaService) {}

//   async customer(
//     userWhereUniqueInput: Prisma.CustomerWhereUniqueInput,
//   ): Promise<Customer | null> {
//     return this.prisma.customer.findUnique({
//       where: userWhereUniqueInput,
//     });
//   }

//   async customers(params: {
//     skip?: number;
//     take?: number;
//     cursor?: Prisma.CustomerWhereUniqueInput;
//     where?: Prisma.CustomerWhereInput;
//     orderBy?: Prisma.CustomerOrderByWithRelationInput;
//   }): Promise<Customer[]> {
//     const { skip, take, cursor, where, orderBy } = params;
//     return this.prisma.customer.findMany({
//       skip,
//       take,
//       cursor,
//       where,
//       orderBy,
//     });
//   }

//   async createCustomer(data: Prisma.CustomerCreateInput): Promise<Customer> {
//     return this.prisma.customer.create({
//       data,
//     });
//   }

//   async updateCustomer(params: {
//     where: Prisma.CustomerWhereUniqueInput;
//     data: Prisma.CustomerUpdateInput;
//   }): Promise<Customer> {
//     const { where, data } = params;
//     return this.prisma.customer.update({
//       data,
//       where,
//     });
//   }

//   async deleteUser(where: Prisma.CustomerWhereUniqueInput): Promise<Customer> {
//     return this.prisma.customer.delete({
//       where,
//     });
//   }
// }