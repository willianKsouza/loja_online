import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateProductService } from './create/create.service';
import { CreateProductDto } from './create/dto/create.product.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
    constructor(private readonly createProductService: CreateProductService){}
  
    @ApiBody({ type: [CreateProductDto] })
    @ApiResponse({ status: 201, description: 'produto criado com sucesso.'})
    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
      try {
        await this.createProductService.create(createProductDto);
      } catch (error) {
        throw new HttpException(error.response, error.status)
      }
    }
}
