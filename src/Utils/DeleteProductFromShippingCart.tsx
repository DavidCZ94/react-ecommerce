import { Product } from '../Models/product.type';

const DeleteProductFromShippingCart = ( actualShoppingCart: Product[], productToDelete: Product): Product[]  => {
    let updatedShoppingCart: Product[] = [];
    const productIndex: number = actualShoppingCart.indexOf(productToDelete);
    if (productIndex >= 0 && actualShoppingCart[productIndex].qty > 0) {
        actualShoppingCart[productIndex].qty--;
        actualShoppingCart[productIndex].totalAmount -=
        Math.floor(actualShoppingCart[productIndex].price) ;
        updatedShoppingCart = [...actualShoppingCart]
        return updatedShoppingCart;
    }
    return actualShoppingCart
}

export default DeleteProductFromShippingCart;