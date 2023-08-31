import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Contexts/ShoppingCartContext";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import HorizontalCard from "../../Components/TotalChackoutCard";

type Props = {}

const MyOrders: React.FC<Props> = () => {

  const shoppingCartContext = useContext(ShoppingCartContext);

  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/home' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className="w-1/2">
        <HorizontalCard
          key={`myOrdersTableTitle`}
          title={'Order Id'}
          totalItems={'Total Items'}
          totalAmount={'Total Amount'}
        />
      </div>
      <div className="w-1/2">
        {shoppingCartContext.myOrders.map((order, index) => (
          <Link key={`${order.id}${index}`} to={`/my-order/${order.id}`}>
            <HorizontalCard
              title={order.id}
              totalItems={order.totaProducts}
              totalAmount={order.totalPrice}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default MyOrders
