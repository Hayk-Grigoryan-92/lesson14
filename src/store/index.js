import { configureStore } from "@reduxjs/toolkit";
import  tittleSlice  from './reducers/tittleSlice'



export const store = configureStore({
    reducer: tittleSlice
})