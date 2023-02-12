import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountController } from './bank_account.controller';
import { BankAccountService } from './bank_account.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { Bank_account, PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

describe('BankAccountController', () => {
  let controller: BankAccountController;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccountController],
      providers: [BankAccountService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    controller = module.get<BankAccountController>(BankAccountController);
    prisma = module.get(PrismaService);
  });

  describe('findAll', () => {
    it('should return an array of bank accounts', async () => {
      const result = [
        {
          Id: 1,
          Balance: 250,
          RIB: 'testRIB1',
          owner_id: 2,
          admin_id: 2,
          log_id: 0,
        },
      ];
      prisma.bank_account.findMany.mockResolvedValue(result);
      expect(controller).toBeDefined();
    });
  });

  describe('findOneAccount', () => {
    it('should return the customer with the specified Id', async () => {
      const call = 1;
      const result = {
        Id: 1,
        Balance: 250,
        RIB: 'test',
        owner_id: 1,
        admin_id: 1,
        log_id: 0,
      };
      prisma.bank_account.findFirst.mockResolvedValue(result);
      expect(await controller.findOneAccount(call)).toBe(result);
    });
  });
  /*describe('findUserByUsername', () => {
    it('should return a customer when given his username', async () => {
      const call = 'Lenglart';
      const result = {
        Id: 1,
        Firstname: 'Cedric',
        Lastname: 'Lenglart',
        Username: 'cedric.lenglart',
        Password: 'test123456',
      };
      prisma.bank_account.findFirst.mockResolvedValue(result);
      expect(await controller.findByUserLastname(call)).toBe(result);
    });
  });*/
  /*describe('addCurency', () => {
    it('should return the balance of the account + the specified amount', async () => {
      const call = {
        Id: 1,
        amountToAdd: 100,
      };
      const result = {
        Id: 1,
        Balance: 350,
        RIB: 'testRIB1',
        owner_id: 2,
        admin_id: 2,
        log_id: 0,
      };
      prisma.bank_account.update.mockResolvedValue(result);
      expect(await controller.addCurency(call)).toBe(result);
    });
  });*/
  describe('create', () => {
    it('should create a new bank account when a DTO is passed', async () => {
      const call = {
        Balance: 0,
        owner_id: 2,
        admin_id: 2,
        log_id: 0,
      };
      const result = {
        Id: 3,
        RIB: null,
        Balance: 0,
        owner_id: 1,
        admin_id: 1,
        log_id: 1,
      };

      prisma.bank_account.create.mockResolvedValue(result);
      expect(await controller.create(call)).toBe(result);
    });
  });
});
