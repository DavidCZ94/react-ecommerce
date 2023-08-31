import React, { useContext, useEffect, useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Contexts/ShoppingCartContext';

type Props = {}

const ProductDetail: React.FC<Props> = () => {

    const productDetailRef = useRef<HTMLElement | null>(null);

    const shoppingCartContext = useContext(ShoppingCartContext);

    useEffect(() => {
        const handleWindowClick = (event: MouseEvent) => {
            event.stopPropagation();
            if (productDetailRef.current && !productDetailRef.current.contains(event.target as Node)) {
                shoppingCartContext?.closeProductDetail();
            }
        };

        if (shoppingCartContext?.isProductDetailOpen) {
            window.addEventListener('click', handleWindowClick);
        } else {
            window.removeEventListener('click', handleWindowClick);
        }

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, [shoppingCartContext?.isProductDetailOpen]);

    return (
        <aside ref={productDetailRef} className={`${shoppingCartContext?.isProductDetailOpen ? 'flex': 'hidden'} flex flex-col fixed top-16 right-0 border w-[360px] h-[calc(100vh-65px)] border-black rounded-lg bg-white p-4`}>
            <div className='flex flex-col justify-between align-middle'>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>ProductDetail</h2>
                    <XMarkIcon 
                        onClick={() => shoppingCartContext.closeProductDetail()} 
                        className='cursor-pointer h-6 w-6 text-black'/>
                </div>
                <div>
                    <figure className='px-6'>
                        <img
                            className='w-full h-full rounded-lg' 
                            src={shoppingCartContext?.productToShow.image} 
                            alt={shoppingCartContext?.productToShow.title} 
                            />
                    </figure>
                    <p className='flex flex-col p-6'>
                        <span className='font-medium text-2xl mb-2'>${shoppingCartContext.productToShow.price}</span>
                        <span className='font-medium text-md'>${shoppingCartContext.productToShow.title}</span>
                        <span className='font-light text-sm'>${shoppingCartContext.productToShow.description}</span>
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail