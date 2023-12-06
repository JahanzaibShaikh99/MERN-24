import { useState , useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const URL = 'http://localhost:8000/products';
  const [products, setProducts] = useState([]);
  const [discounted, setDisCountedProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${URL}/product`);
      const productsResponse = response.data;
      setProducts(productsResponse);
      setDisCountedProducts(productsResponse.map((item)=>  {
        return {
          ...item,
          discountPrice: (item.price )* 50/100,
          discount: `${50}%`,
        }
      }))
      // console.log(response.data)
    };
    fetchProducts();
  }, []);
  return (
   <>
   <div className='container w-full '>
      <div className="prodcut-card">
        <div className="image">

        </div>
        <div className="product border-[2px solid black] bg-green text-white">
          {discounted.map((item)=>{
            // return  JSON.stringify(item)
            return (
              <>
              <h2>Product Name:{item.name} </h2>
              <h2>Product Price:{item.price} </h2>
              <h2>Discounted Price:{item.discountPrice} </h2>
              <h2>Discount:{item.discount} </h2>
              </>
            )
          })}
        </div>
      </div>
   </div>
   </>
  )
}

export default App
