import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomers } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomers) {}
