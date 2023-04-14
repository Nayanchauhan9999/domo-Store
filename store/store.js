import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart:cartReducers,
    }
})

export default store;