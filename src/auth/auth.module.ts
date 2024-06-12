import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { findUserRepositoryToken } from './find.repository.token';
import { FindPrismaService } from './find.user.prisma.repository';
import { JwtModule } from '@nestjs/jwt';

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
      useClass: FindPrismaService,
    },
  ],
  exports:[AuthService]
})
export class AuthModule {}
