import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { UpdateUserDto } from './dto/update.user.dto';
import { IUpdateRepository } from './interfaces/IUpdate.user.repository';

@Injectable()
export class UpdateUserPrismaService implements IUpdateRepository {

  private prisma = new PrismaClient({
    log: ['info', 'query', 'warn', 'error'],
  });

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
    }
  }
}
