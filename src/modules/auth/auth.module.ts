import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './logIn/auth.service';
import { findUserRepositoryToken } from './logIn/find.repository.token';
import { JwtModule } from '@nestjs/jwt';
import { UsersRepository } from '../repositoryDistributor/userDistributorRepository';
import { sendForgotEmailPassword } from './forgotPassword/forgot.password.repository.token';
import { SendForgotEmailPasswordService } from './forgotPassword/resetPassWord.service';


@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '70s' },
      }),
     
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: findUserRepositoryToken,
      useClass: UsersRepository.FindUserByEmail,
    },
    SendForgotEmailPasswordService,
    {
      provide: sendForgotEmailPassword,
      useClass:UsersRepository.ForgotPassWord
    }
  ],
  exports:[AuthService]
})
export class AuthModule {}
