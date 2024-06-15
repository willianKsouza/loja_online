import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from 'src/modules/users/create/dto/create.user.dto';
import { ICreateUserRepository } from 'src/modules/users/create/interfaces/ICreate.user.repository';

import { ulid } from 'ulid';
import { prisma } from '../../prisma.connect';

@Injectable()
export class CreateUserPrismaRepository implements ICreateUserRepository {
  private prisma = prisma()

  async create(createUserDto: CreateUserDto): Promise<void>{
    const ULID = ulid();
    try {
      await this.prisma.users.create({
        data: {
          id: ULID,
          ...createUserDto,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2024') {
          throw new HttpException('tempo excedido', HttpStatus.REQUEST_TIMEOUT);
        }
        if (error.code === 'P2002') {
          throw new HttpException(
            'esse email ja existe no banco',
            502,
          );
        }
      }
      throw new HttpException('algo de errado ocorreu', HttpStatus.BAD_REQUEST);
    }
  }
}
