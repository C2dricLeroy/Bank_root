import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BankAccountService } from './bank_account.service';
import { CreateBankAccountDto } from './dto/create-bank_account.dto';
import { UpdateBank_accountDto } from './dto/update-bank_account.dto';
import { ApiTags } from '@nestjs/swagger';
import { updateBalanceDTO } from './dto/updateBalanceDTO.dto';
import { transferDto } from './dto/transfer.dto';

@Controller('bank-account')
@ApiTags('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post('create')
  create(@Body() dto: CreateBankAccountDto) {
    return this.bankAccountService.create(dto);
  }

  @Post('/deposit')
  addCurency(@Body() dto: updateBalanceDTO) {
    return this.bankAccountService.addMoney(dto);
  }

  @Post('/withdrawal')
  updateBalance(@Body() dto: updateBalanceDTO) {
    return this.bankAccountService.withdrawMoney(dto);
  }

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
  findOneAccount(@Param('id', ParseIntPipe) id: number) {
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

  @Post('transfer')
  transferMoney(@Body() body: transferDto) {
    return this.bankAccountService.transferMoneyViaId(
      body.accountOneId,
      body.accountTwoId,
      body.amount,
    );
  }
}
