import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { findUserRepositoryToken } from './find.repository.token';
import { JwtModule } from '@nestjs/jwt';
import { FindByEmailRepository } from 'src/modules/prisma/users/find-users/find-users-by-email.repository';


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
      useClass: FindByEmailRepository,
    },
  ],
  exports:[AuthService]
})
export class AuthModule {}
