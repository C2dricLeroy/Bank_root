import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';
import { CreateBankAccountDto } from './create-bank_account.dto';

export class UpdateBank_accountDto extends PartialType(CreateBankAccountDto) {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  owner_id: number;
}
