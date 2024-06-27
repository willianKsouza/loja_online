import { CreateProductPrismaRepository } from "../repositories/prisma/products/create-products/create-products.repository";
import { UpdateProductPrismaRepository } from "../repositories/prisma/products/update-products/update-users.repository";

export const ProductsRepository = {
    CreateProduct: CreateProductPrismaRepository,
    UpdateProduct: UpdateProductPrismaRepository
}