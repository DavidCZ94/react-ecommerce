import { Product } from "./product.type"

export type Order = {
    id: string
    date: Date,
    products: Product[],
    totaProducts: number,
    totalPrice: number
}