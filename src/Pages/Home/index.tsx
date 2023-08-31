import { useContext, useEffect } from "react"
import ProductCard from "../../Components/ProductCard"
import { ShoppingCartContext } from "../../Contexts/ShoppingCartContext";
import { FilterProductsByTitle } from "../../Utils/FilterProducts";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCategory } from "../../Models/category.enum";
import { apiUrl } from "../../Api";
import { Product } from "../../Models/product.type";
import { LoadingSpinnerContext } from "../../Contexts/loadingSpinnerContext";

function Home() {
  const navigate  = useNavigate();
  const loadingSpinnerContext = useContext(LoadingSpinnerContext);
  const categoriesObject = {
    'all': '',
    'womens-clothing': ProductCategory.WomensClothing,
    'mens-clothing': ProductCategory.MensClothing,
    'electronics': ProductCategory.Electronics,
    'jewelery': ProductCategory.Jewelery
  }

  let { category } = useParams<string>();

  useEffect(() => {
    console.log("🚀 ~ useEffect:", category)
    if(category){
      GetProductByCategory(category);
    }else{
      navigate('/home/all');
    }
  }, [category]);

  const GetProductByCategory = (category: string) => {    
    loadingSpinnerContext.setIsLoading(true);
    const categoryFilter = category === 'all' ? `?limit=20` : `/category/${categoriesObject[category as keyof typeof categoriesObject]}`;
    fetch(`${apiUrl}/products${categoryFilter}`)
      .then((res) => res.json())
      .then((res: Product[]) => {
        loadingSpinnerContext.setIsLoading(false);
        shoppingCartContext.setProductsList(res);
        shoppingCartContext.setProductsFiltered(res);
      })
      .catch(() => {
        loadingSpinnerContext.setIsLoading(false);
      })
  }


  const renderProducts = () => {
    return (
      shoppingCartContext.productsFiltered.map(product => (
        <ProductCard key={`home-${product.id}`} product={product}></ProductCard>
      ))
    )
  }

  const filterProductByTitle = (searchValue: string) => {
    const productsFiltered = FilterProductsByTitle(shoppingCartContext.productsList, searchValue)
    shoppingCartContext.setProductsFiltered(productsFiltered);
  }

  const shoppingCartContext = useContext(ShoppingCartContext);

  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <div >
        <input
          className='rounded-lg border border-black w-80 h-10 p-4 mb-4 focus:outline-double'
          type="text"
          name="searchProductsInput"
          id="searchProductsInput"
          placeholder="Search product"
          onChange={(event) => filterProductByTitle(event.target.value)} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 p-10 auto-rows-max gap-4 w-full max-w-screen-lg">
        {renderProducts()}
      </div>
    </>
  )
}

export default Home
