import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './logIn/auth.service';
import { AuthDto } from './logIn/dto/auth.dto';
import { Response } from 'express';
import { SendForgotEmailPasswordService } from './forgotPassword/resetPassWord.service';
import { ForgotPasswordDto } from './forgotPassword/dto/forgotPassword.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private sendForgotEmailPasswordService: SendForgotEmailPasswordService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() authDto: AuthDto, @Res() res: Response) {
    try {
      const token = await this.authService.signIn(authDto);
      return res
        .setHeader('Authorization', `Bearer ${token.acessToken}`)
        .send();
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Post('forgot')
  async SendForgotEmailPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.sendForgotEmailPasswordService.forgotPassWord(forgotPasswordDto)
  }
}
