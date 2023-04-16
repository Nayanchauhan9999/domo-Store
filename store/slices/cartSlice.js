import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false,
    proData : []
}
const cartReducers = createSlice({
    name:"cart",
    initialState,
    reducers:{
        toggleCart(state,action){
            state.isOpen = action.payload
        },
        addItem(state,action){
            const newItemID = action.payload.id;
            const existingItem = state.cartItmes.find(value => value.id === newItemID)
            if(newItemID){
                existingItem.quantity++
            }else{
                state.cartItmes.push(action.payload)
            }
        },
        removeItem(){},
        increseQuantity(){},
        decreaseQuantity(){}
    }
})

export const {toggleCart, addItem, removeItem, increseQuantity, decreaseQuantity} = cartReducers.actions
export default cartReducers.reducer