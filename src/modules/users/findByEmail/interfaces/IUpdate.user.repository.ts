import { User } from "src/entity/user";

export interface IFindUserByEmailRepository {
  findByEmail(email: string ):Promise<User | null>
}
