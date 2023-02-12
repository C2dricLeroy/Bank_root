import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { PrismaService } from '../prisma/prisma.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';

describe('CustomersController', () => {
  let controller: CustomersController;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    controller = module.get<CustomersController>(CustomersController);
    prisma = module.get(PrismaService);
  });
  describe('findAll', () => {
    it('should return an array of all customers', async () => {
      const mockResult = [
        {
          Id: 2,
          Firstname: 'Lucie',
          Lastname: 'Lenglart',
          Username: 'lucie.lenglart',
          Password: 'test123456',
        },
        {
          Id: 4,
          Firstname: 'Albert',
          Lastname: 'Leroy',
          Username: 'albert.leroy',
          Password: 'test123456',
        },
      ];
      // jest.spyOn(CustomersService, 'findAll').mockReturnValue(result);
      prisma.customers.findMany.mockResolvedValue(mockResult);
      expect(await controller.findAll()).toBe(mockResult);
    });
  });
  describe('findOne', () => {
    it('should return a customer', async () => {
      const call = 1;
      const result = {
        Id: 1,
        Firstname: 'Cedric',
        Lastname: 'Lenglart',
        Username: 'cedric.lenglart',
        Password: 'test123456',
      };
      prisma.customers.findFirst.mockResolvedValue(result);
      expect(await controller.findOne(call)).toBe(result);
    });
  });
  describe('create', () => {
    it('should create a new customer', async () => {
      const call = {
        Firstname: 'string',
        Lastname: 'string',
        Password: 'test123456',
        Username: 'test.test',
      };
      const result = {
        Id: 7,
        Firstname: 'string',
        Lastname: 'string',
        Username: 'test.test',
        Password: 'test123456',
      };

      prisma.customers.create.mockResolvedValue(result);
      expect(await controller.create(call)).toBe(result);
    });
  });
  describe('update', () => {
    it('should update a customer', async () => {
      const call = '1';
      const dto = {
        Id: 1,
        Firstname: 'cedric',
        Lastname: 'leroy',
        Username: 'cedric.leroy',
        Password: 'autrepassword',
      };
      const result = {
        Id: 1,
        Firstname: 'cedric',
        Lastname: 'leroy',
        Username: 'cedric.leroy',
        Password: 'autrepassword',
      };

      prisma.customers.update.mockResolvedValue(result);
      expect(await controller.update(call, dto)).toBe(result);
    });
  });
  /*describe('delete', () => {
    it('should delete a customer', async () => {
      const call = '5';
      const result = {};
    });
  });*/
});
