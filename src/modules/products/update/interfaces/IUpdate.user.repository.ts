import { UpdateProductDto } from "../dto/update.product.dto";



export interface IUpdateProductRepository {
  update(id: string, updateProductDto: UpdateProductDto): Promise<void>;
}
