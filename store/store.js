import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./slices/cartSlice";
import wishlistReducers from "./slices/wishlistSlice"

const store = configureStore({
    reducer:{
        cart:cartReducers,
        wishlist : wishlistReducers
    }
})

export default store;