import { Inject } from '@nestjs/common';
import { SendEmailRepository } from 'src/modules/repositories/email/send-email-repository';
import { sendForgotEmailPassword } from './forgot.password.repository.token';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { SendEmailDto } from 'src/modules/repositories/email/dto/SendEmail.dto';
import { ISendEmailRepository } from './interfaces/ISendEmailRepository';


export class SendForgotEmailPasswordService {
  constructor(
    @Inject(sendForgotEmailPassword)
    private readonly sendEmail: ISendEmailRepository,
  ) {}
  async forgotPassWord(forgotPasswordDto:ForgotPasswordDto) {
    const template = 'ForgotPassWord';
    const  sendEmailDto: SendEmailDto = {
      subject:'Recupeção de senha',
      to:'UM CERTO EMAIL',
      context: {
        
      }
    }
    return this.sendEmail.sendEmail(sendEmailDto, template);
  }
}
