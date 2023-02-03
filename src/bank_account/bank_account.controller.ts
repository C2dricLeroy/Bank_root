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
import { UpdateBank_accountDto } from './dto/update-bank_account.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bank-account')
@ApiTags('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('create')
  create(@Body() dto: CreateBankAccountDto) {
    return this.bankAccountService.create(dto);
  }

  // @Post('')

  @Get(':user')
  findByUserLastname(@Param('user') userLastname: string) {
    return this.bankAccountService.findByUserLastname({
      Lastname: userLastname,
    });
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
    @Body() updateBankAccountDto: UpdateBank_accountDto,
  ) {
    return this.bankAccountService.update(+id, updateBankAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountService.getBalance(+id);
  }
}
