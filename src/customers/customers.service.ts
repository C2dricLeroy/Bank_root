import { CreateCustomers } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Get, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { isNumberObject } from 'util/types';
import { Prisma, Customers } from '@prisma/client';


@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCustomers) {
    const newCustomer = await this.prisma.customers.create({
      data: {
        Firstname: dto.Firstname,
        Lastname: dto.Lastname,
        Username: dto.Username,
        Password: dto.Password
      }
     });
     console.log(`the user ${newCustomer.Firstname} have been created.`)
   }

  findAll() {
    return this.prisma.customers.findMany();
  }

  // async findOne(
  //   customerWhereInput: Prisma.CustomersWhereInput,
  // ): Promise<Customer | null> {
  //   return this.prisma.customers.findUnique({
  //     where: customerWhereInput,
  //   });
  // }
  async customers(customersWhereInput: Prisma.CustomersWhereInput): Promise<Customers | null> {
    return this.prisma.customers.findFirst({ where: customersWhereInput });
  }

  async getCustomers(customers_id) {
    return await this.customers({Id: parseInt(customers_id)});
  }

  //  findOne(@Param('id') id: any) {
  //    return this.prisma.customers.findUnique({
  //      select: {  id :   }
  //    });
  //  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
