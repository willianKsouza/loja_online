import { CreateProductDto } from "../dto/create.product.dto";


export interface ICreateProductRepository {
  create(createProductDto: CreateProductDto): Promise<void>;
}
