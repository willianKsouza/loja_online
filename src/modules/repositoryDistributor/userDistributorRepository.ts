import { CreateUserPrismaRepository } from "../prisma/users/create-users/create-users.repository";
import { FindByEmailRepository } from "../prisma/users/find-users/find-users-by-email.repository";
import { UpdateUserPrismaRepository } from "../prisma/users/update-users/update-users.repository";

export const UsersRepository = {
    CreateUser: CreateUserPrismaRepository,
    UpdateUser:UpdateUserPrismaRepository,
    FindUserByEmail: FindByEmailRepository
}