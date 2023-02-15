import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountService } from './bank_account.service';
import { PrismaService } from '../prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';

describe('BankAccountService', () => {
  let service: BankAccountService;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get<BankAccountService>(BankAccountService);
    prisma = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new bank_account when dto argument is passed', async () => {
      const user = {
        Balance: 250,
        owner_id: 1,
        admin_id: 1,
        log_id: 1,
        Id: 20,
        RIB: 'testRIB',
      };
      prisma.bank_account.create.mockResolvedValue(user);
      expect(await service.create(user)).toEqual(user);
    });
  });

  describe('delete', () => {
    it('should delete a bank_account when id argument is passed', async () => {
      const result = {
        Balance: 250,
        owner_id: 1,
        admin_id: 1,
        log_id: 1,
        Id: 20,
        RIB: 'testRIB',
      };

      prisma.bank_account.delete.mockResolvedValue(result);
      expect(await service.remove(result)).toEqual(result);
    });

    describe('getBalance', () => {
      it('should return the balance of a bank_account when id argument is passed', async () => {
        const call = 20;
        const result = {
          Balance: 0,
          owner_id: 1,
          admin_id: 1,
          log_id: 1,
          Id: 20,
          RIB: 'testRIB',
        };

        prisma.bank_account.delete.mockResolvedValue(result);
        expect(await service.getBalance(call)).toEqual(result);
      });
    });
  });
});
