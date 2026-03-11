import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './features/CounterSlice.js'


export const store =configureStore({
    reducer:{

        counter:CounterReducer
         
    }
})