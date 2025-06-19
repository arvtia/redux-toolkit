
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // { id, product_name, price, quantity }
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
        removeFromCart: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);
            if (existing) {
                if (existing.quantity > 1) {
                existing.quantity -= 1;
                } else {
                // Remove item completely if quantity reaches 0
                state.items = state.items.filter(i => i.id !== item.id);
                }
            } else {
                console.warn("Tried to remove item not in cart:", item.id);
            }
        },
        setCart: (state, action) => {
            state.items = action.payload.items;
        }
    }
})

export const { addToCart, removeFromCart, setCart } = cartSlice.actions

export default cartSlice.reducer