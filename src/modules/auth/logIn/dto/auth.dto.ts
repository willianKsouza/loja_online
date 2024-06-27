import { IsEmail, IsString, MinLength } from "class-validator"

export class AuthDto {
    @IsString()
    email: string

    @IsString()
    password:string
}