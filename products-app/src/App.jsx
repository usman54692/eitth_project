import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './redux/features/ProductSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  const products = useSelector((store)=>store.product.products)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <>
      <h1>Fetch All Products</h1>

      {
        products?.map((product,index)=>(
          <div key={index}>
            <img src={product.image} alt="" width="100"/>
            <h2>{product.category}</h2>
          </div>
        ))
      }

    </>
  )
}

export default App