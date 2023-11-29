// import { configureStore } from "@reduxjs/toolkit";
// import CartSlice from "./CartSlice";
// const Store = configureStore({
//     reducer: {
//         cart: CartSlice
//     },
//     devTools: true
// });

// export default Store;

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

export const Store = configureStore({
    reducer :{
        cart : CartSlice
    },
    devTools : true
})