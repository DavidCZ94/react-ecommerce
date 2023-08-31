import { Product } from "../Models/product.type"

const FilterProductsByTitle = (productsList: Product[], filterValue: string): Product[] => {
    return productsList.filter((product) => (
        product.title.toLowerCase().includes(filterValue.toLowerCase())
    ))
}

const FilterProductsByCategory = (productsList: Product[], filterValue: string): Product[] => {
    return productsList.filter((product) => (
        product.category.toLowerCase().includes(filterValue.toLowerCase())
    ))
}

export {FilterProductsByTitle, FilterProductsByCategory};