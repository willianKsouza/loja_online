import { Body, Controller, HttpException, Param, Patch, Post } from '@nestjs/common';
import { CreateProductService } from './create/create.service';
import { CreateProductDto } from './create/dto/create.product.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { UpdateProductService } from './update/update.service';
import { UpdateProductDto } from './update/dto/update.product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
  ) {}

  @ApiBody({ type: [CreateProductDto] })
  @ApiResponse({ status: 201, description: 'produto criado com sucesso.' })
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      await this.createProductService.create(createProductDto);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }


  @ApiBody({ type: [UpdateProductDto] })
  @ApiResponse({ status: 201, description: 'alteração do produto feita com sucesso.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      await this.updateProductService.update(id, updateProductDto);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
