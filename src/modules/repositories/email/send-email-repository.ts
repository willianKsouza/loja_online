import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ISendEmailRepository } from 'src/modules/auth/forgotPassword/interfaces/ISendEmailRepository';
import { SendEmailDto } from './dto/SendEmail.dto';

@Injectable()
export class SendEmailRepository implements ISendEmailRepository {
  constructor(private readonly mailerService: MailerService) {}
  sendEmail(sendEmailDto:SendEmailDto, template: string) {
    try {
      this.mailerService
      .sendMail({
        to: sendEmailDto.to,
        from: 'melyna25@ethereal.email',
        subject: sendEmailDto.subject,
        template: template,
        context: {
          ...sendEmailDto.context
        },
      })
    } catch (error) {
      throw new ServiceUnavailableException()
    }
      
  }
}
