import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const product=useSelector((state)=>state.product.products)
  const dispatch=useDispatch()
  
     console.log(product);
      
     
  

  return (
    <>
     <h1>Fetch All Products</h1>
    </>
  )
}

export default App
