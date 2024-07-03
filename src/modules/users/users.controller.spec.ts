import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUserService } from './create/create.user.service';
import { UpdateUserService } from './update/update.service';
import { CreateUserDto } from './create/dto/create.user.dto';
import { UpdateUserDto } from './update/dto/update.user.dto';
import { User } from 'src/entity/user';
import { ulid } from 'ulid';
import { HttpException } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
 
  const newUser: User = {
    id: '01ARZ3NDEKTSV4RRFFQ69G5FAV',
    email: 'rugalmple@gmail.com',
    name: 'rugal bernisten',
    password: '111222',
    nickName: 'rugal',
    cpf: '08690-900',
    phone: '11-98091-5069',
    birthDate: '1990-01-01',
    createdAt: new Date(),
    lastLogin: new Date(),
  };

  const createUserDto: CreateUserDto = {
    email: 'rugalmple@gmail.com',
    name: 'rugal bernisten',
    password: '111222',
    nickName: 'rugal',
    cpf: '08690-900',
    phone: '11-98091-5069',
    birthDate: '1990-01-01',
    createdAt: new Date(),
    lastLogin: new Date(),
  };

  const UpdateUserDto: UpdateUserDto = {
    nickName: 'donoo2'
  }

  let mockCreateUsersService = {
    create: jest.fn().mockResolvedValue(newUser),
  };
  let mockUpdateUsersService = {
    update: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: CreateUserService,
          useValue: mockCreateUsersService,
        },
        {
          provide: UpdateUserService,
          useValue: mockUpdateUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('create', async () => {
    await controller.create(createUserDto);
    expect(mockCreateUsersService.create).toHaveBeenCalledTimes(1);
    expect(mockCreateUsersService.create).toHaveBeenCalledWith(createUserDto);
  });

  it('update', async () => {
    await controller.update('01ARZ3NDEKTSV4RRFFQ69G5FAV', UpdateUserDto);
    expect(mockUpdateUsersService.update).toHaveBeenCalledTimes(1);
    expect(mockUpdateUsersService.update).toHaveBeenCalledWith('01ARZ3NDEKTSV4RRFFQ69G5FAV', UpdateUserDto);
 
  });












});


