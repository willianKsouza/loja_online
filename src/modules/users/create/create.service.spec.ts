import { Test, TestingModule } from '@nestjs/testing';
import { CreateService } from './create.service';
import { createRepositoryToken } from './create.user.repository.token';

describe('CreateService', () => {
  let service: CreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateService,
        {
          provide: createRepositoryToken,
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<CreateService>(CreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


});
