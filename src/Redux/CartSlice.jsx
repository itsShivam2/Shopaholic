// import { createSlice } from '@reduxjs/toolkit'
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// export const CartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload)
//         },
//         deleteFromCart(state, action) {
//             return state.filter(item => item.id !== action.payload.id);
//         }
//     }
// })

// export const { addToCart, deleteFromCart } = CartSlice.actions;

// export default CartSlice.reducer;

// 
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.push(action.payload);
      return [...state, action.payload];

    },
    deleteFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateCartItemQuantity: (state, action) => {
      console.log('Before update - state:', state);
      const { id, quantity } = action.payload;
      // const itemToUpdate = state.find(item => item.id === id);
      return state.map(item => (item.id === id ? { ...item, quantity } : item));
    },
  },
});

export const { addToCart, deleteFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;

