import { CreateBankAccountDto } from './create-bank_account.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBankAccountDto extends PartialType(CreateBankAccountDto) {}
