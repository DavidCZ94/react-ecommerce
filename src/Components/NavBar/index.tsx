import React, { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext'
import CalculateQuantityOfProducts from '../../Utils/CalculateQuantityOfProducts'
import './index.css'

const NavBar: React.FC = () => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-8';

  return (
    <nav className='navbar-container bg-black/75 text-white h-12 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/home/all'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/all'
            className={({ isActive }) =>
            isActive ? activeStyle : ""
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/womens-clothing'
            className={({ isActive }) =>
            isActive ? activeStyle : ""
          }>
            Women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/mens-clothing'
            className={({ isActive }) =>
            isActive ? activeStyle : ""
          }>
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/electronics'
            className={({ isActive }) =>
            isActive ? activeStyle : ""
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/home/jewelery'
            className={({ isActive }) =>
            isActive ? activeStyle : ""
          }>
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink
            to='/my-orders'>
            My orders
          </NavLink>
        </li>
{/*         <li>
          <NavLink
            to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'>
            Sign in
          </NavLink>
        </li> 
*/}
        <li>
          <div
            onClick={(event) => {event.stopPropagation(); shoppingCartContext.toggleMyOrderDetail()}} 
            className={'flex items-center cursor-pointer'}>
            <ShoppingCartIcon className='h-6 w-6 text-white'/>
            <div className='ml-2'>
              {CalculateQuantityOfProducts(shoppingCartContext.shoppingCart)}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar