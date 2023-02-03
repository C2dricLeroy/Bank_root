import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBankAccountDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({ message: 'the account balance should be 0.' })
  Balance: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  owner_id: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  admin_id: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  log_id: number;
}
