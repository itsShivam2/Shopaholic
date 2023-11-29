import { createSlice } from '@reduxjs/toolkit'
// const initialState = [];
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
})

export const { addToCart, deleteFromCart } = CartSlice.actions;

export default CartSlice.reducer;