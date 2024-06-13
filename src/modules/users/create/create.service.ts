import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { createRepositoryToken } from './create.user.repository.token';
import { ICreateUserRepository } from './interfaces/ICreate.user.repository';
import * as bcrypt from 'bcrypt';



@Injectable()
export class CreateService {
  constructor(
    @Inject(createRepositoryToken)
    private readonly createRepository: ICreateUserRepository,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<void> {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(createUserDto.password, salt);
      await this.createRepository.create({
        ...createUserDto,
        password:hash
      });
  }
}
