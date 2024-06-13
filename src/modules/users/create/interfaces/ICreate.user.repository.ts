import { CreateUserDto } from '../dto/create.user.dto';

export interface ICreateUserRepository {
  create(createUserDto: CreateUserDto): Promise<void>;
}
