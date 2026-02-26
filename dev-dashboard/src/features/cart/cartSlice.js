
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state) => {
      state.totalItems += 1;
    },
    removeItem: (state) => {
      if (state.totalItems > 0) {
        state.totalItems -= 1;
      }
    },
    resetCart: (state) => {
      state.totalItems = 0;
    },
  },
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;