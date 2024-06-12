import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './create/create.service';


@Module({
  providers: [CreateProductService],
  controllers: [ProductsController]
})
export class ProductsModule {}
