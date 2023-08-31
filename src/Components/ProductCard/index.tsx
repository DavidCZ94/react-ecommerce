import { PlusSmallIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { Product } from '../../Models/product.type'
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext'
import AddProductToShippingCart from '../../Utils/AddProductToShippingCart'

type Props = {
    product: Product
}

const ProductCard: React.FC<Props> = ({product}) => {

    const shoppingCartContext = useContext(ShoppingCartContext);

    const addProduct = (event: React.MouseEvent, product: Product) => {
        event.stopPropagation();
        shoppingCartContext?.closeProductDetail();
        shoppingCartContext?.openMyOrderDetail();
        const updatedShoppingCart: Product[] = AddProductToShippingCart(shoppingCartContext.shoppingCart, product);
        shoppingCartContext?.setShoppingCart([...updatedShoppingCart]);
    }

    const showProduct = (event: React.MouseEvent) => {
        event.stopPropagation();
        shoppingCartContext?.closeMyOrderDetail();
        shoppingCartContext?.openProductDetail();
        shoppingCartContext?.setProductToShow(product);
    };

    return (
        <div onClick={(event) => showProduct(event)} className='bg-white cursor-pointer w-full h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <button 
                    className='absolute top-0 right-0 flex bg-white/80 justify-center items-center w-8 h-8 rounded-full m-0 p-0'
                    onClick={(event) => addProduct(event, product)}
                    >
                    <PlusSmallIcon className='w-full h-full rounded-full m-0 p-0'/>
                </button>
                <span className='absolute bottom-0 left-0 bg-white/75 rounded-lg text-black font-bold text-xs m-2 px-3 py-0.5'>{product.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={product.image} alt={product.title} />
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light truncate'>{product.title}</span>
                <span className='text-lg font-medium'>${product.price}</span>
            </p>
        </div>
    )
}

export default ProductCard;