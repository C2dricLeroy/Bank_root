import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { CreateCustomers } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomers) {
  @ApiProperty()
  @Length(3, 50)
  @IsString()
  Firstname: string;

  @ApiProperty()
  @IsString()
  @Length(3, 50)
  Lastname: string;

  @ApiProperty()
  @IsString()
  @Length(8)
  Password: string;

  @ApiProperty()
  @IsString()
  @Length(3, 50)
  Username: string;
}
