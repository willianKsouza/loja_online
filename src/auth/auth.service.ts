import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthDto } from './dto/auth.dto';
import { findUserRepositoryToken } from './find.repository.token';
import { IFindByEmailRepository } from './interfaces/IFindByEmailRepository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(findUserRepositoryToken)
    private readonly findRepository: IFindByEmailRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(authDto: AuthDto) {
    
    const user = await this.findRepository.findByEmail(authDto.email);
    if (user) {
      const checkPassword = await bcrypt.compare(
        authDto.password,
        user.password,
      );
      if (checkPassword) {
        const payload = { sub: user.id, username: user.email };
        return {
          acessToken: await this.jwtService.signAsync(payload),
        };
      } else {
        throw new HttpException('senha invalida', HttpStatus.NOT_FOUND);
      }
    }
    throw new HttpException(
      'nao existe um usuario com esse email informado',
      HttpStatus.NOT_FOUND,
    );
  }
}
