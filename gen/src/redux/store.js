// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'


export const storee = configureStore({
  reducer: {
    cart: cartReducer
  }
})