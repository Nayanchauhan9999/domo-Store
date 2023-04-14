import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false,
    proData : []
}
const cartReducers = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(){},
        removeItem(){},
        increseQuantity(){},
        decreaseQuantity(){}
    }
})

export const { addItem, removeItem, increseQuantity, decreaseQuantity} = cartReducers.actions
export default cartReducers.reducer