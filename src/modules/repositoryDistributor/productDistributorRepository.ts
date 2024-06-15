import { CreateProductPrismaRepository } from "../prisma/products/create-products/create-products.repository";
import { UpdateProductPrismaRepository } from "../prisma/products/update-products/update-users.repository";

export const ProductsRepository = {
    CreateProduct: CreateProductPrismaRepository,
    UpdateProduct: UpdateProductPrismaRepository
}