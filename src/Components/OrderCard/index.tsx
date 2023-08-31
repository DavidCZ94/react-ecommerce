import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { Product } from '../../Models/product.type'
import DeleteProductFromShippingCart from '../../Utils/DeleteProductFromShippingCart'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext'


type Props = {
    product: Product,
    handleDelete: boolean
}

const OrderCard: React.FC<Props> = ({product, handleDelete}) => {

    const shoppingCartContext = useContext(ShoppingCartContext);
    
    const deleteProduct = (product: Product) => {
        const updatedShoppingCart: Product[] = DeleteProductFromShippingCart(shoppingCartContext.shoppingCart, product);
        shoppingCartContext?.setShoppingCart([...updatedShoppingCart]);
    }

    return (
        <div className="flex items-center shadow-md hover:shadow-xl my-4 rounded-lg">
            <div className='w-5/12 h-20 flex items-center gap-2 px-1 my-1'>
                <figure className='w-4/12 h-full'>
                    <img className='w-full h-full rounded-lg object-cover' src={product.image} alt={product.title} />
                </figure>
                <p className='w-8/12 text-sm font-light text-clip overflow-hidden h-full'>{product.title}</p>
            </div>
            <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                <p className='text-lg font-medium'>{product.qty}</p>
            </div>
            <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                <p className='text-lg font-medium'>${product.price}</p>
            </div>
            <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                <p className='text-lg font-medium'>${product.totalAmount}</p>
            </div>
            { handleDelete &&
                <div className='w-1/12 flex items-center gap-2 px-1 my-1'>
                    <MinusCircleIcon onClick={(_) => deleteProduct(product) } className='h-6 w-6 text-black cursor-pointer'></MinusCircleIcon>
                </div>
            }
        </div>
    )
}

export default OrderCard