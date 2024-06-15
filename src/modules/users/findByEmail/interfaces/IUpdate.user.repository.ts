export interface IFindUserByEmailRepository {
  findByEmail(email: string, ): Promise<void>;
}
