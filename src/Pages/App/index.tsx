import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import NavBar from '../../Components/NavBar'
import Layout from '../../Components/Layout'
import ShoppingCartProvider from '../../Contexts/ShoppingCartContext'
import ProductDetail from '../../Components/ProductDetail'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import LoadingSpinnerProvider from '../../Contexts/loadingSpinnerContext'
import LoadingSpinner from '../../Components/Loading-spinner'
//import MyAccount from '../MyAccount'
//import SignIn from '../SignIn'

const AppRoutes: React.FC = () => {
  const routesObject: RouteObject[] = [
    { path: '/home', element: <Home/>},
    { path: '/home/:category', element: <Home/>},
    { path: '/my-order/:orderId', element: <MyOrder/>},
    { path: '/my-orders/last', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/*', element: <NotFound/>},
    //TODO: This is goint to be implemented in the future.
/*     { path: '/my-account', element: <MyAccount/>},
    { path: '/sign-in', element: <SignIn/>}, */
  ];
  const routes: React.ReactElement | null = useRoutes(routesObject);
  return routes;
}

const App: React.FC = () => {
  return (
    <LoadingSpinnerProvider>
      <LoadingSpinner></LoadingSpinner>
      <ShoppingCartProvider>
        <BrowserRouter>
          <div className='app-container'>
            <NavBar></NavBar>
            <Layout>
              <AppRoutes/>
            </Layout>
            <ProductDetail/>
            <CheckoutSideMenu/>
          </div>
        </BrowserRouter>
      </ShoppingCartProvider>
    </LoadingSpinnerProvider>
  )
}

export default App;
