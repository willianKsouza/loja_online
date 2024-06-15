import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './create/create.service';
import { CreateProductPrismaRepository } from '../prisma/products/create-products/create-products.repository';
import { createProductRepositoryToken } from './create/create.product.repository.token';
import { ProductsRepository } from '../repositoryDistributor/productDistributorRepository';
import { UpdateProductService } from './update/update.service';
import { updateProductRepositoryToken } from './update/update.product.repository.token';

@Module({
  providers: [
    CreateProductService,
    {
      provide: createProductRepositoryToken,
      useClass: ProductsRepository.CreateProduct,
    },
    UpdateProductService,
    {
      provide:updateProductRepositoryToken,
      useClass:ProductsRepository.UpdateProduct
    }
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
