import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { ICreateProductRepository } from './interfaces/ICreate.repository';
import { ulid } from 'ulid';
import { CreateProductDto } from './dto/create.product.dto';

@Injectable()
export class CreateProductPrismaService implements ICreateProductRepository {
  private prisma =  new PrismaClient();
  
  async create(createProductDto: CreateProductDto): Promise<any> {
    const ULID = ulid();
    try {
      await this.prisma.products.create({
        data: {
          id: ULID,
          ...createProductDto,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2024'){
          throw new HttpException('tempo excedido', HttpStatus.REQUEST_TIMEOUT)
        }
      }
      // if (error instanceof Prisma.) {
        
      // }
    }
  }
}
