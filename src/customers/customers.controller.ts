import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomers } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('customers')
@ApiTags('customers')
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
  @Get('/id/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.getCustomers(id);
  }

  @Get('/username/:username')
  findByUserName(@Param('username') username: string) {
    return this.customersService.findByUsername({ Username: username });
  }

  // Update Customer information by his Id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.delete({ Id: id });
  }
}
