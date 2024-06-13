import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/modules/users/create/dto/create.user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto){}