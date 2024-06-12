import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { ulid } from 'ulid';
import { AuthDto } from './dto/auth.dto';
import { IFindByEmailRepository } from './interfaces/IFindByEmailRepository';
import { User } from 'src/entity/user';





@Injectable()
export class FindPrismaService implements IFindByEmailRepository {
  private prisma = new PrismaClient({
    log: ['info', 'query', 'warn', 'error'],
  });
  
  async findByEmail(email: string):Promise<User | null> {
    try {
      const user = await this.prisma.users.findUnique({
        where:{
            email:email,
        }
      });
      return user
    } catch (error) {
      
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2024'){
          throw new HttpException('tempo excedido', HttpStatus.REQUEST_TIMEOUT)
        }
      }
    }
  }
}