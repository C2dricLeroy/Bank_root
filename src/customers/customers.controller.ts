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

   @Post('create')
   create(@Body() dto: CreateCustomers) {
     return this.customersService.create(dto);
   }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }
 
  @Get(':id') findOne(@Request() req) {
    return this.customersService.getCustomers(parseInt(req.params.id));
  }

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
