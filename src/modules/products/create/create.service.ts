import { Inject, Injectable } from '@nestjs/common';
import { createProductRepositoryToken } from './create.product.repository.token';
import { ICreateProductRepository } from './interfaces/ICreate.product.repository';
import { CreateProductDto } from './dto/create.product.dto';

@Injectable()
export class CreateProductService {
    constructor(@Inject(createProductRepositoryToken) private readonly createProductRepository:ICreateProductRepository){}
    async create(createProductDto: CreateProductDto): Promise<void> {
        await this.createProductRepository.create(createProductDto)
    }
}
