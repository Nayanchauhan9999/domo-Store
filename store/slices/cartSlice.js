import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proData: [],
};
const cartReducers = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newID = action.payload.id;
      const existingItem = state.proData.find((value) => value.id === newID);
      if (existingItem) {
        if (existingItem.quantity >= 5) {
          return;
        } else {
          existingItem.quantity += 1;
        }
      } else {
        state.proData.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.proData = state.proData.filter(
        (value) => value.id !== action.payload
      );
    },
    increseQuantity(state, action) {
      const existingItem = state.proData.find(
        (value) => value.id === action.payload.id
      );
      if (existingItem.quantity >= 5) {
        return;
      } else {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const existingItem = state.proData.find(
        (value) => value.id === action.payload.id
      );
      if (existingItem.quantity <= 1) {
        return;
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increseQuantity, decreaseQuantity } =
  cartReducers.actions;
export default cartReducers.reducer;
