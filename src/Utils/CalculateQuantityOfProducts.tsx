import { Product } from '../Models/product.type';

const CalculateQuantityOfProducts = ( actualShoppingCart: Product[]): number  => {
    let totalQuantity: number = 0;
    totalQuantity = actualShoppingCart.reduce((acc, product) => acc + product.qty, 0 )
    return totalQuantity;
}

export default CalculateQuantityOfProducts;