import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBankAccountDto } from './create-bank_account.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class updateBalanceDTO {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  Id: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  amountToAdd: number;
}
