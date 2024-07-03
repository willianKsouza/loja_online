import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { createUserRepositoryToken } from './create.user.repository.token';
import { ICreateUserRepository } from './interfaces/ICreate.user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(createUserRepositoryToken)
    private readonly createRepository: ICreateUserRepository,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<void> {
    try {

      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(createUserDto.password, salt);
     await this.createRepository.create({
        ...createUserDto,
        password: hash,
      })
    } catch (error) {
      throw new HttpException(error.response, error.status)
    }
  }
}
