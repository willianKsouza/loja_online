import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './create.user.service';
import { createUserRepositoryToken } from './create.user.repository.token';
import { CreateUserDto } from './dto/create.user.dto';
import { CreateProductPrismaRepository } from 'src/modules/repositories/prisma/products/create-products/create-products.repository';




describe('CreateService', () => {
  let createService: CreateUserService;
  const createUserDto: CreateUserDto = {
      email: "rugal@gmail.com", 
      name: "rugal bernisten",
      password : "111222", 
      nickName: "rugal",
      cpf: "08690-900", 
      phone: "11-98091-5069", 
       birthDate: "1990-01-01", 
       createdAt: new Date("2024-05-27T16:42:00Z"), 
       lastLogin: new Date("2024-05-27T16:42:00Z")

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: createUserRepositoryToken,
          useValue: {
            create: jest.fn()
          },
        },
      ],
    }).compile();


    createService = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
  
    expect(CreateUserService).toBeDefined();
  });

  it('create user',async () => {
    
  });
});
