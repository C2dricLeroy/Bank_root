import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountController } from './bank_account.controller';
import { BankAccountService } from './bank_account.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
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
});
