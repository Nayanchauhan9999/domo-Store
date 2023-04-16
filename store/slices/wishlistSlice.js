import { createSlice } from "@reduxjs/toolkit";

const wishlistReducers = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist(state, action) {
      const existingItem = state.find(
        (value) => value.id === action.payload.id
      );
      if (existingItem) {
        return;
      } else {
        state.push(action.payload);
      }
    },
    removeWishlist(state, action) {
    return state.filter(value => value.id !== action.payload)
    },
  },
});

export const { addToWishlist,removeWishlist } = wishlistReducers.actions;
export default wishlistReducers.reducer;
