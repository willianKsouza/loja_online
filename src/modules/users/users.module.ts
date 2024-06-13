import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateService } from './create/create.service';
import { createRepositoryToken } from './create/create.user.repository.token';
import { UpdateUserService } from './update/update.service';
import { updateUserRepositoryToken } from './update/update.user.repository.token';

import { CreateUserPrismaRepository } from 'src/modules/prisma/users/create-users/create-users.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UpdateUserPrismaRepository } from 'src/modules/prisma/users/update-users/update-users.repository';


@Module({
  imports:[],
  controllers: [UsersController],
  providers: [
    CreateService,
    {
      provide: createRepositoryToken,
      useClass: CreateUserPrismaRepository,
    },
    UpdateUserService,
    {
      provide: updateUserRepositoryToken,
      useClass: UpdateUserPrismaRepository,
    },
  ],
})
export class UsersModule {}
