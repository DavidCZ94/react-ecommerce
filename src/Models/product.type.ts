export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: ProductsCategory,
    image: string,
    rating: Rating,
    qty: number,
    totalAmount: number
}

export type Rating = {
    rate: number,
    count: number
}

export enum ProductsCategory {
    MENS_CLOTHING = `men's clothing`,
    JEWELERY = `jewelery`,
    ELECTRONICS = `electronics`,
    WOMENS_CLOTHING = `women's clothing`
}