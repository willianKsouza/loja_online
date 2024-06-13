import { UpdateUserDto } from "../dto/update.user.dto";


export interface IUpdateUserRepository {
  update(email: string,updateUserDto: UpdateUserDto): Promise<void>;
}
