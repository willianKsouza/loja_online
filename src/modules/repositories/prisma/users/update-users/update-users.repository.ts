import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateUserDto } from 'src/modules/users/update/dto/update.user.dto';
import { IUpdateUserRepository } from 'src/modules/users/update/interfaces/IUpdate.user.repository';
import { prisma } from '../../prisma.connect';

@Injectable()
export class UpdateUserPrismaRepository implements IUpdateUserRepository {

  private prisma = prisma()

  async update(id: string, updateUserDto: UpdateUserDto ): Promise<void> {

    try {
      await this.prisma.users.update({
        where: {
          id:id
        },
        data: updateUserDto
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
