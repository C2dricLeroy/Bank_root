import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BankAccountService } from './bank_account.service';
import { CreateBankAccountDto } from './dto/create-bank_account.dto';
import { UpdateBankAccountDto } from './dto/update-bank_account.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bank-account')
@ApiTags('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('create')
  create(@Body() dto: CreateBankAccountDto) {
    return this.bankAccountService.create(dto);
  }

  //get all accounts
  @Get()
  findAll() {
    return this.bankAccountService.findAll();
  }

  @Get(':id')
  findOneAccount(@Param('id') id: number) {
    return this.bankAccountService.getAccount(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return this.bankAccountService.update(+id, updateBankAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountService.getBalance(+id);
  }
}
