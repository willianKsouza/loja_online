import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ProductsModule } from './modules/products/products.module';
import { PrismaModule } from './modules/repositories/prisma/prisma.module';
import { EmailModule } from './modules/repositories/email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

// transport: 'smtps://user@domain.com:pass@smtp.domain.com',
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport:{
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'melyna25@ethereal.email',
              pass: 'PNeZsddrmUFAhUQqCb'
          }
        },
        defaults: {
          from: '"teste.0test" <zena.kertzmann@ethereal.email>',
        },
        template: {
          dir: process.cwd() + '/views/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    PrismaModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
