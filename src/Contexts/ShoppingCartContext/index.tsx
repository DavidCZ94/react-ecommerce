import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Product } from "../../Models/product.type";
import { Order } from "../../Models/order.type";
import { apiUrl } from "../../Api";
import { LoadingSpinnerContext } from "../loadingSpinnerContext";

type Props = {
    children: ReactNode,
}

type ShoppingCartContextType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    isProductDetailOpen: boolean,
    openProductDetail: Function,
    closeProductDetail: Function,
    isMyOrderDetailOpen: boolean,
    openMyOrderDetail: Function,
    closeMyOrderDetail: Function,
    toggleMyOrderDetail: Function,
    productToShow: Product, //Used for show product detail
    setProductToShow: Function
    shoppingCart: Product[],
    setShoppingCart: Function,
    myOrders: Order[],
    setMyOrders: Function,
    productsList: Product[], //List of all products getted from api
    setProductsList: Function,
    productsFiltered: Product[], // Products to show on the principal
    setProductsFiltered: Function,
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType);

const ShoppingCartProvider: React.FC<Props> = ({ children }) => {

    //const loadingSpinnerContext = useContext(LoadingSpinnerContext);

    const [productsList, setProductsList] = useState<Product[]>([]);

    useEffect(() => {
        //getProducts();
    }, [])

/*     const getProducts = () => {
        loadingSpinnerContext.setIsLoading(true);
        fetch(`${apiUrl}/products?limit=20`)
            .then((res) => res.json())
            .then((res: Product[]) => {
                loadingSpinnerContext.setIsLoading(false);
                setProductsList(res);
                setProductsFiltered(res);
            })
            .catch(() => {
                loadingSpinnerContext.setIsLoading(false);
            })
    } */


    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isMyOrderDetailOpen, setIsMyOrderDetailOpen] = useState(false)
    const openMyOrderDetail = () => setIsMyOrderDetailOpen(true);
    const closeMyOrderDetail = () => setIsMyOrderDetailOpen(false);
    const toggleMyOrderDetail = () => {
        setIsMyOrderDetailOpen(!isMyOrderDetailOpen)
    };

    const [productToShow, setProductToShow] = useState({} as Product);

    const [shoppingCart, setShoppingCart] = useState([]);

    const [myOrders, setMyOrders] = useState([]);

    const [productsFiltered, setProductsFiltered] = useState(productsList);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            isMyOrderDetailOpen,
            openMyOrderDetail,
            closeMyOrderDetail,
            toggleMyOrderDetail,
            productToShow,
            setProductToShow,
            shoppingCart,
            setShoppingCart,
            myOrders,
            setMyOrders,
            productsList,
            setProductsList,
            productsFiltered,
            setProductsFiltered
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;