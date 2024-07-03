import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserService } from './create.user.service';
import { createUserRepositoryToken } from './create.user.repository.token';
import { CreateUserDto } from './dto/create.user.dto';
import { HttpException } from '@nestjs/common';




describe('CreateService', () => {
  let createService: CreateUserService;
  const createUserDto: CreateUserDto = {
    email: 'rugal@gmail.com',
    name: 'rugal bernisten',
    password: '111222',
    nickName: 'rugal',
    cpf: '08690-900',
    phone: '11-98091-5069',
    birthDate: '1990-01-01',
    createdAt: new Date('2024-05-27T16:42:00Z'),
    lastLogin: new Date('2024-05-27T16:42:00Z'),
  };
  const createUserDto2: CreateUserDto = {
    email: 'rugal2@gmail.com',
    name: 'rugal bernisten',
    password: '111222',
    nickName: 'rugal',
    cpf: '08690-900',
    phone: '11-98091-5069',
    birthDate: '1990-01-01',
    createdAt: new Date('2024-05-27T16:42:00Z'),
    lastLogin: new Date('2024-05-27T16:42:00Z'),
  };

  const mockUserCreateRepository = {
    create: jest.fn()
  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: createUserRepositoryToken,
          useValue: mockUserCreateRepository,
        },
      ],
    }).compile();

    createService = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(CreateUserService).toBeDefined();
  });

  it('create user', async () => {
    await createService.create(createUserDto);
    expect(mockUserCreateRepository.create).toHaveBeenCalledTimes(1);
  });

  it('create to throw', async () => {

    jest.spyOn(mockUserCreateRepository, "create").mockImplementationOnce(async (arg: CreateUserDto)=> {
      const arr = [createUserDto]
      const findUser = Promise.resolve(arr.find(({email}) => email === arg.email))
      if (!(await findUser)) {
        return true
      }
      throw new HttpException('tempo excedido', 408)
    })


   await expect(createService.create(createUserDto)).rejects.toThrow(HttpException)
  });
});
