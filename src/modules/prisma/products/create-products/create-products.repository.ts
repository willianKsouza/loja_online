import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { CreateProductDto } from 'src/modules/products/create/dto/create.product.dto';
import { ICreateProductRepository } from 'src/modules/products/create/interfaces/ICreate.product.repository';


import { ulid } from 'ulid';
import { prisma } from '../../prisma.connect';


@Injectable()
export class CreateProductPrismaRepository implements ICreateProductRepository {
  private prisma =  prisma()
  
  async create(createProductDto: CreateProductDto): Promise<void> {
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
        if (error.code === 'P2002') {
          throw new HttpException(
            `esse nome ja existe no banco`,
            502,
          );
        }
      }
      if (error instanceof Prisma.PrismaClientValidationError){
        throw new HttpException(
          `dados invalidos`,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException('algo de errado ocorreu', HttpStatus.BAD_REQUEST);

    }
  }
}