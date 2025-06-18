
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // { id, product_name, price, quantity }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existing = state.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer