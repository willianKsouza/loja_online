import { Inject, Injectable } from '@nestjs/common';
import { updateUserRepositoryToken } from './update.user.repository.token';
import { IFindUserByEmailRepository } from './interfaces/IUpdate.user.repository';


@Injectable()
export class FindUserByEmailService {
  constructor(
    @Inject(updateUserRepositoryToken)
    private readonly findUserByEmail: IFindUserByEmailRepository,
  ) {}

  async findByEmail(id: string, findUserByEmail: FindUserByEmailDto): Promise<void> {
   await this.findUserByEmail.findByEmail(id,findUserByEmail)
  }
}
