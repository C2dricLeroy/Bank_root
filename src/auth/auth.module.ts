import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";

import { PrismaService } from "../prisma/prisma.service";
// import { Bank_accountService } from "src/bank_account/bank_account.service.js";
// import { CustomerService } from "src/customer/customer.service.js";
// import { PrismaService } from "src/prisma/prisma.service.js";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";

@Module({
    imports: [PrismaModule],
    controllers: [AuthController],
    providers: [AuthService],
    
})
export class AuthModule {}

