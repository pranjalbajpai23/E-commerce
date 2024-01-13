import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
  name: "active",
  initialState:{ val:"home"},
  reducers: {
    activeHome: (state) => {
      state.val="home";
    },
    activeProduct: (state) => {
      state.val="product"
    },
  },
});
export const activeAction = activeSlice.actions;
export default activeSlice;
