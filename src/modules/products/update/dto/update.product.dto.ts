import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/modules/users/create/dto/create.user.dto";
import { CreateProductDto } from "../../create/dto/create.product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto){}