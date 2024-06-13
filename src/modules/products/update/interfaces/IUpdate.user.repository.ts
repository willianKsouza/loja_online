import { UpdateUserDto } from "../dto/update.product.dto";


export interface IUpdateUserRepository {
  update(email: string,updateUserDto: UpdateUserDto): Promise<void>;
}
