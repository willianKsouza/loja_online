import { IsArray, IsBoolean, IsJSON, IsNumber, IsString } from "class-validator"

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
    @IsJSON()
    specifications: string
    @IsArray()
    images:         string[]
    @IsNumber()
    stock:          number
}