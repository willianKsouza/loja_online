import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from './create/create.user.service';
import { createUserRepositoryToken } from './create/create.user.repository.token';
import { UpdateUserService } from './update/update.service';
import { updateUserRepositoryToken } from './update/update.user.repository.token';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { UsersRepository } from '../repositoryDistributor/userDistributorRepository';


@Module({
  imports:[],
  controllers: [UsersController],
  providers: [
    CreateUserService,
    {
      provide: createUserRepositoryToken,
      useClass: UsersRepository.CreateUser,
    },
    UpdateUserService,
    {
      provide: updateUserRepositoryToken,
      useClass:UsersRepository.UpdateUser,
    },
  ],
})
export class UsersModule {}
