import React, { useContext, useEffect, useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';
import OrderCard from '../OrderCard';
import HorizontalCard from '../TotalChackoutCard';
import CalculateQuantityOfProducts from '../../Utils/CalculateQuantityOfProducts';
import CalculateTotalAmount from '../../Utils/CalculateTotalAmoun';
import { Link } from 'react-router-dom';
import { Order } from '../../Models/order.type';

type Props = {}

const CheckoutSideMenu: React.FC<Props> = () => {

    const checkoutSideMenuRef = useRef<HTMLElement | null>(null);

    const shoppingCartContext = useContext(ShoppingCartContext);
    const checkoutDisabled = CalculateTotalAmount(shoppingCartContext.shoppingCart) === 0;

    const handleCheckout = () => {
        shoppingCartContext.closeMyOrderDetail();
        const newOrder: Order = {
            id: `${new Date().getTime().toString()}${shoppingCartContext.myOrders.length}`,
            date: new Date(),
            products: shoppingCartContext.shoppingCart,
            totaProducts: CalculateQuantityOfProducts(shoppingCartContext.shoppingCart),
            totalPrice: CalculateTotalAmount(shoppingCartContext.shoppingCart)
        }
        shoppingCartContext.setMyOrders([...shoppingCartContext.myOrders, newOrder])
        shoppingCartContext.setShoppingCart([])
    }

    useEffect(() => {
        const handleWindowClick = (event: MouseEvent) => {
            if (checkoutSideMenuRef.current && !checkoutSideMenuRef.current.contains(event.target as Node)) {
                shoppingCartContext?.closeMyOrderDetail();
            }
        };

        if (shoppingCartContext?.isMyOrderDetailOpen) {
            window.addEventListener('click', handleWindowClick);
        } else {
            window.removeEventListener('click', handleWindowClick);
        }

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, [shoppingCartContext?.isMyOrderDetailOpen]);
    return (
        <aside ref={checkoutSideMenuRef} className={`${shoppingCartContext?.isMyOrderDetailOpen ? 'flex' : 'hidden'} flex flex-col fixed top-16 right-0 border w-[500px] h-[calc(100vh-65px)] border-black rounded-lg bg-white p-4`}>
            <div className='flex flex-col justify-between align-middle overflow-y-scroll'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-medium text-xl'>My Order</h2>
                    <XMarkIcon
                        onClick={() => shoppingCartContext?.closeMyOrderDetail()}
                        className='cursor-pointer h-6 w-6 text-black' />
                </div>
                <div className="flex items-center shadow-md hover:shadow-xl my-2 rounded-lg">
                    <div className='w-5/12 flex items-center gap-2 px-1 my-1'>
                        <p className='text-lg font-semibold'>Title</p>
                    </div>
                    <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                        <p className='text-lg font-semibold'>Qty</p>
                    </div>
                    <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                        <p className='text-lg font-semibold'>Price</p>
                    </div>
                    <div className='w-2/12 flex items-center gap-2 px-1 my-1'>
                        <p className='text-lg font-semibold'>Total Amount</p>
                    </div>
                    <div className='w-1/12 flex items-center gap-2 px-1 my-1'>
                    </div>
                </div>
                <div>
                    {
                        shoppingCartContext?.shoppingCart.map(product => (
                            <OrderCard
                                key={`checkoutProduct-${product.id}`}
                                product={product}
                                handleDelete={true}
                            />
                        ))
                    }
                    <HorizontalCard
                        key={`checkoutSideMenu-checkoutProduct`}
                        title={'Total'}
                        totalItems={CalculateQuantityOfProducts(shoppingCartContext.shoppingCart)}
                        totalAmount={CalculateTotalAmount(shoppingCartContext.shoppingCart)}
                    />
                </div>
                <div>
                    <Link to='/my-orders/last'>
                        <button disabled={checkoutDisabled} className={(checkoutDisabled ? `bg-black/50 text-slate-200 py-3 w-full rounded-lg` : `bg-black/75 hover:bg-black text-white py-3 w-full rounded-lg`)} onClick={() => handleCheckout()}>Checkout</button>
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu