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
});
