import { Inject, Injectable } from '@nestjs/common';
import { updateProductRepositoryToken } from './update.product.repository.token';
import { IUpdateProductRepository } from './interfaces/IUpdate.user.repository';
import { UpdateProductDto } from './dto/update.product.dto';



@Injectable()
export class UpdateProductService {
  constructor(
    @Inject(updateProductRepositoryToken)
    private readonly updateProductRepository: IUpdateProductRepository,
  ) {}

  async update(id: string, updateProductDto: UpdateProductDto): Promise<void> {
   await this.updateProductRepository.update(id,updateProductDto)
  }
}
