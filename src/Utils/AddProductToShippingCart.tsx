import { Product } from '../Models/product.type';

const AddProductToShippingCart = ( actualShoppingCart: Product[], newProduct: Product): Product[]  => {
    let updatedShoppingCart: Product[] = [];
    const productIndex: number = actualShoppingCart.indexOf(newProduct);
    if (productIndex >= 0) {
        actualShoppingCart[productIndex].qty++;
        actualShoppingCart[productIndex].totalAmount +=
        Math.floor(actualShoppingCart[productIndex].price) ;
        updatedShoppingCart = [...actualShoppingCart]
    }else{
        newProduct.qty = 1;
        newProduct.totalAmount = Math.floor(newProduct.price);
        updatedShoppingCart = [...actualShoppingCart, newProduct]
    }

    return updatedShoppingCart;
}

export default AddProductToShippingCart;