import { Product } from '../Models/product.type';

const CalculateTotalAmount = ( actualShoppingCart: Product[]): number  => {
    let totalAmount: number = 0;
    totalAmount = actualShoppingCart.reduce((acc, product) => acc + product.totalAmount, 0 )
    return totalAmount;
}

export default CalculateTotalAmount;