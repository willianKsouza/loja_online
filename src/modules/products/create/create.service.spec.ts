import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductService } from './create.service';

describe('CreateService', () => {
  let service: CreateProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProductService],
    }).compile();

    service = module.get<CreateProductService>(CreateProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
