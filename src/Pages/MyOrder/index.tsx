import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';
import HorizontalCard from '../../Components/TotalChackoutCard';
import OrderCard from '../../Components/OrderCard';
import { Order } from '../../Models/order.type';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

type Props = {}

const MyOrder: React.FC<Props> = () => {

  const shoppingCartContext = useContext(ShoppingCartContext);
  const {orderId} = useParams();

  let orderToShow: Order[] = [];

  if (shoppingCartContext?.myOrders.length > 0) {
    if(orderId) orderToShow = shoppingCartContext?.myOrders.filter((order) => order.id === orderId);
    else orderToShow = shoppingCartContext?.myOrders.slice(-1)
  }

  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div>
        {orderToShow.length > 0 &&
          orderToShow[0].products.map(product => (
            <OrderCard
              key={`myOrder-${product.id}`}
              product={product}
              handleDelete={false}
            />
          ))
        }
        {orderToShow.length > 0 &&
          <HorizontalCard
            key={`myOrder-checkoutProduct`}
            title={'Total'}
            totalItems={orderToShow[0].totaProducts}
            totalAmount={orderToShow[0].totalPrice}
          />
        }
      </div>
    </>
  )
}

export default MyOrder
