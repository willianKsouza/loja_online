import { SendEmailRepository } from "../repositories/email/send-email-repository";
import { CreateUserPrismaRepository } from "../repositories/prisma/users/create-users/create-users.repository";
import { FindUserByEmailRepository } from "../repositories/prisma/users/find-users/find-users-by-email.repository";

import { UpdateUserPrismaRepository } from "../repositories/prisma/users/update-users/update-users.repository";

export const UsersRepository = {
    CreateUser: CreateUserPrismaRepository,
    UpdateUser:UpdateUserPrismaRepository,
    FindUserByEmail: FindUserByEmailRepository,
    ForgotPassWord: SendEmailRepository
}