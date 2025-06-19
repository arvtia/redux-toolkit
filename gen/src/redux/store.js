// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import cartSyncMiddleware from './cartSync'

export const storee = configureStore({
  reducer: {
    cart: cartReducer
  }, 
  middleware: ( getDefaultMiddleware) => getDefaultMiddleware ().concat(cartSyncMiddleware)
})


