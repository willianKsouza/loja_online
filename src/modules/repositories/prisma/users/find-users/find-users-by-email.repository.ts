import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { prisma } from '../../prisma.connect';
import { User } from 'src/entity/user';
import { IFindByEmailRepository } from 'src/modules/auth/logIn/interfaces/IFindByEmailRepository';
import { NotFoundError } from 'rxjs';
import { IFindUserByEmailRepository } from 'src/modules/users/findByEmail/interfaces/IUpdate.user.repository';


@Injectable()
export class FindUserByEmailRepository implements IFindUserByEmailRepository {
  private prisma = prisma()
  
  async findByEmail(email: string):Promise<User | null> {
    try {
      const user = await this.prisma.users.findUnique({
        where:{
            email:email,
        }
      })
      return user
    } catch (error) {
      
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2024'){
          throw new HttpException('tempo excedido', HttpStatus.REQUEST_TIMEOUT)
        }
      }
      throw new NotFoundException();
    }
  }
}
