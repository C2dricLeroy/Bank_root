import { CreateCustomers } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Injectable } from '@nestjs/common';
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
    // Appeler ici fonction create account en passant le bon Id
    console.log(
      `the user ${newCustomer.Firstname} have been created with the account ....`,
    );
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

  // Update Customers information
  async update(id: number, dto: UpdateCustomerDto) {
    console.log(`The Customer with Id ${id} have been updated. `);
    return this.prisma.customers.update({
      where: { Id: id },
      data: {
        Firstname: dto.Firstname,
        Lastname: dto.Lastname,
        Username: dto.Username,
        Password: dto.Password,
      },
    });
  }

  // Delete Customers
  async delete(
    customersWhereInput: Prisma.CustomersWhereUniqueInput,
  ): Promise<Customers | null> {
    console.log(`
    the Customer with Id ${customersWhereInput.Id} have been deleted.`);
    return this.prisma.customers.delete({ where: customersWhereInput });
  }
}
