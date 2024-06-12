import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { CreateUserPrismaService } from './create/create.user.prisma.repository';
import { CreateService } from './create/create.service';

import { createRepositoryToken } from './create/create.user.repository.token';
import { UpdateUserService } from './update/update.service';
import { updateUserRepositoryToken } from './update/update.user.repository.token';
import { UpdateUserPrismaService } from './update/update.user.prisma.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[],
  controllers: [UsersController],
  providers: [
    CreateService,
    {
      provide: createRepositoryToken,
      useClass: CreateUserPrismaService,
    },
    UpdateUserService,
    {
      provide: updateUserRepositoryToken,
      useClass: UpdateUserPrismaService,
    },
  ],
})
export class UsersModule {}
