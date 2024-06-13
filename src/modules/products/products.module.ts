import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './create/create.service';
import { CreateProductPrismaRepository } from '../prisma/products/create-products/create-products.repository';
import { createProductRepositoryToken } from './create/create.product.repository.token';


@Module({
  providers: [
    CreateProductService,
    {
    provide:createProductRepositoryToken,
    useClass:CreateProductPrismaRepository
  }],
  controllers: [ProductsController]
})
export class ProductsModule {}
