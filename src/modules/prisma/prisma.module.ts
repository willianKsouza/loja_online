import { Module } from '@nestjs/common';
import { CreateUserPrismaRepository } from './users/create-users/create-users.repository';
import { FindByEmailRepository } from './users/find-users/find-users-by-email.repository';
import { UpdateUserPrismaRepository } from './users/update-users/update-users.repository';

@Module({
  providers: [CreateUserPrismaRepository, UpdateUserPrismaRepository, FindByEmailRepository]
})
export class PrismaModule {}
