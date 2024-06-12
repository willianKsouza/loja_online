import { UpdateUserDto } from "../dto/update.user.dto";


export interface IUpdateRepository {
  update(email: string,updateUserDto: UpdateUserDto): Promise<void>;
}
