import { Controller, Post, Get, HttpCode, Body, Req, ValidationPipe, Param, UsePipes, Render } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { Request } from 'express';
// import { CustomerService } from "src/customer/customer.service.js";
// import { Bank_accountService } from "src/bank_account/bank_account.service.js";
import { Customers as CustomerModel, Bank_account as Bank_accountModel} from '@prisma/client'
import { AuthDto, /*CreateCustomers*/ } from "./dto";

@Controller('auth')
 export class AuthController {
    constructor(private authService: AuthService,
                //private readonly customerService: CustomerService,
                /*private readonly bank_accountService: Bank_accountService,*/) {}

    @Get('/')
    @Render('connexion')
    Connexion() {}

   //  @Post('signup')
   //  signup(@Body() dto: CreateCustomers) {
   //    return this.authService.signup();
   //  }

      // @Get('customer/:id')
      // async getCustomers(@Param('id') id: any): Promise<CustomerModel> {
      //     return this.customerService.customer({})
      // }

    // @Post('signin')
    // @HttpCode(200)
    // @UsePipes(ValidationPipe)
    // async signin(@Body() userdata: CreateUser) {
        
    // }
 }