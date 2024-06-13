import { IsArray, IsBoolean, IsJSON, IsNumber, IsObject, IsString } from "class-validator"

export class CreateProductDto {
    @IsString()
    name:           string 
    @IsString()
    description:    string
    @IsString()
    category:       string
    @IsNumber()
    price:          number
    @IsBoolean()
    promotion:      boolean
    @IsNumber()
    discount:       number
    @IsString()
    brand:          string
    @IsString()
    model:          string
    @IsObject()
    specifications: string
    @IsString({each: true})
    images:         string[]
    @IsNumber()
    stock:          number
}