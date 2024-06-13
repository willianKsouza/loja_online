import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateService } from './create/create.service';
import { CreateUserDto } from './create/dto/create.user.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let mockCreateService: CreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: CreateService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    mockCreateService = module.get<CreateService>(CreateService);
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      email: 'rugalmple@gmail.com',
      name: 'rugal bernisten',
      password: '111222',
      nickName: 'rugal',
      cpf: '08690-900',
      phone: '11-98091-5069',
      birthDate: '1990-01-01',
      registrationDate: new Date(),
      lastLogin: new Date(),
    };

    await controller.create(createUserDto);

    expect(mockCreateService.create).toHaveBeenCalledWith(createUserDto);
    expect(mockCreateService.create).toHaveBeenCalledTimes(1);
  });
});
