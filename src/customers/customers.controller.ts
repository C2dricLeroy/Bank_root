import {
  Controller,
  Get,
  Request,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CustomersService } from './customers.service';
import { CreateCustomers } from './dto/create-customer.dto.js';

import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // create a new Customer
  @Post('create')
  create(@Body() dto: CreateCustomers) {
    return this.customersService.create(dto);
  }

  // Return all Customers
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  // Get a Customer by Id
  @Get(':id') findOne(@Request() req) {
    return this.customersService.getCustomers(parseInt(req.params.id));
  }

  // Update Customer informations by his Id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
