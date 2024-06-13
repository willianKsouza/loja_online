import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() authDto: AuthDto, @Res() res: Response ) {
    try {
      const token = await this.authService.signIn(authDto)
      return res.setHeader('Authorization',`Bearer ${token.acessToken}`)
          .send()
    } catch (error) {
      throw new HttpException(error.response, error.status)
    }
  }
}
