import { configureStore } from '@reduxjs/toolkit'
import productslice from './features/ProductSlice.js'

export const store = configureStore({
  reducer: {
    product:productslice
  },
})

