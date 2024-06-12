import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create.user.dto';
import { ICreateUserRepository } from './interfaces/ICreate.user.repository';
import { ulid } from 'ulid';

@Injectable()
export class CreateUserPrismaService implements ICreateUserRepository {
  private prisma = new PrismaClient({
    log: ['info', 'query', 'warn', 'error'],
  });

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
    }
  }
}
