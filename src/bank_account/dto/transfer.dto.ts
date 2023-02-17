import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class transferDto {
  @ApiProperty()
  @IsNumber()
  accountOneId: number;

  @ApiProperty()
  @IsNumber()
  accountTwoId: number;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  amount: number;
}
