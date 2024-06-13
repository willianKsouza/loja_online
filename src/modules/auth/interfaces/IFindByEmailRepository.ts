import { User } from "src/entity/user";

export interface IFindByEmailRepository {
    findByEmail(email: string):Promise<User | null>
}
