import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsIn, IsString, MinLength } from 'class-validator';


export class CreateUserDto {
  @ApiProperty({
    description:'email do usuario'
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsString()
  nickName: string;

  @ApiProperty()
  @IsString()
  cpf: string;


  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsDateString()
  birthDate: string;

  @ApiProperty()
  @IsDateString()
  createdAt: Date;

  @ApiProperty()
  @IsDateString()
  lastLogin: Date;
}
