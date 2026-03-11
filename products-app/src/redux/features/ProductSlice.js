import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


  export const fecthProducts=createAsyncThunk(
    "product/api",
   async ()=>{
        const response= await fetch('https://fakestoreapi.com/products/')

        const data= await response.json();
        console.log(data);
        
        return data;
    }

  )


const ProductSlice=createSlice({
    "name":"product",
    initialState:{
        products:[],
        
    },
    reducers:{
        getProducts:(state,action)=>{
           state.products=action.payload
        }   
    },
    extraReducers:(builder)=>{
             builder.addCase(fecthProducts.fulfilled,(state,action)=>{
                state.products=action.payload
                
                
             })  

    }
});

export const {getProducts}=ProductSlice.actions

export default ProductSlice.reducer


