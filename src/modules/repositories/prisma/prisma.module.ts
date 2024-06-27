import { Module } from '@nestjs/common';
import { CreateUserPrismaRepository } from './users/create-users/create-users.repository';
import { UpdateUserPrismaRepository } from './users/update-users/update-users.repository';
import { FindUserByEmailRepository } from './users/find-users/find-users-by-email.repository';

@Module({
  providers: [
    CreateUserPrismaRepository,
    UpdateUserPrismaRepository,
    FindUserByEmailRepository,
  ],
})
export class PrismaModule {}
