import { Inject, Injectable } from '@nestjs/common';
import { updateUserRepositoryToken } from './update.user.repository.token';
import { IUpdateUserRepository } from './interfaces/IUpdate.user.repository';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    @Inject(updateUserRepositoryToken)
    private readonly updateRepository: IUpdateUserRepository,
  ) {}

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
   await this.updateRepository.update(id,updateUserDto)
  }
}
