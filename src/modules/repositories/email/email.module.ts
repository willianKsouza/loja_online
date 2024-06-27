import { Module } from '@nestjs/common';
import { SendEmailRepository } from './send-email-repository';



@Module({
  providers: [SendEmailRepository]
})
export class EmailModule {}
