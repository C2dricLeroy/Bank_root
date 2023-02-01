import { CreateCustomers } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Get, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Customers } from '@prisma/client';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  // Create a new Customer with DTO validation 
  async create(dto: CreateCustomers) {
    const newCustomer = await this.prisma.customers.create({
      data: {
        Firstname: dto.Firstname,
        Lastname: dto.Lastname,
        Username: dto.Username,
        Password: dto.Password,
      },
    });
    console.log(`the user ${newCustomer.Firstname} have been created.`);
  }

  // Return all Customers
  findAll() {
    return this.prisma.customers.findMany();
  }

  // Find a User with ID
  async customers(
    customersWhereInput: Prisma.CustomersWhereInput,
  ): Promise<Customers | null> {
    return this.prisma.customers.findFirst({ where: customersWhereInput });
  }

  async getCustomers(customers_id) {
    return await this.customers({ Id: parseInt(customers_id) });
  }

  // Update Customers informations
  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  // Delete Customers. 
  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
