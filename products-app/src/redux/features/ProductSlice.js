import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


  export const fetchProducts=createAsyncThunk(
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
        loading:false,
        error:null
        
    },
    reducers:{
        getProducts:(state,action)=>{
           state.products=action.payload
        }   
    },
    extraReducers:(builder)=>{
             builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.products=action.payload
                state.loading=true,
                state.error=null
                
                
             })  ;
             builder.addCase(fetchProducts.pending,(state,action)=>{
                 state.loading=false,
                 state.error="Request Pending"

             })
             builder.addCase(fetchProducts.rejected,(state,action)=>{
                           state.products=[]
                           state.error="Request Cancel Rejected"
             })

    }
});

export const {getProducts}=ProductSlice.actions

export default ProductSlice.reducer


