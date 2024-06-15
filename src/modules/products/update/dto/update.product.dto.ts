import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "../../create/dto/create.product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto ){}