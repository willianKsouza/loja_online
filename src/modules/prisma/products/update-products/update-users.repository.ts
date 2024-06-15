import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from 'src/modules/users/update/dto/update.user.dto';
import { IUpdateUserRepository } from 'src/modules/users/update/interfaces/IUpdate.user.repository';
import { prisma } from '../../prisma.connect';
import { IUpdateProductRepository } from 'src/modules/products/update/interfaces/IUpdate.user.repository';
import { UpdateProductDto } from 'src/modules/products/update/dto/update.product.dto';

@Injectable()
export class UpdateProductPrismaRepository implements IUpdateProductRepository {

  private prisma = prisma()

  async update(id: string, updateProductDto: UpdateProductDto ): Promise<void> {

    try {
      await this.prisma.products.update({
        where: {
          id:id
        },
        data: updateProductDto
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2024'){
          throw new HttpException('tempo excedido', HttpStatus.REQUEST_TIMEOUT)
        }
        if (error.code === 'P2002') {
          let field = error.meta.target[0]

          throw new HttpException(
            `esse ${field} ja existe no banco`,
            502,
          );
        }
      }
      throw new HttpException('algo de errado ocorreu', HttpStatus.BAD_REQUEST);

    }
  }
}
