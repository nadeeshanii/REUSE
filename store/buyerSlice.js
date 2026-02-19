// frontend/store/buyerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  whatsapp: "",
  category: "",
  profilePic: null,
};

export const buyerSlice = createSlice({
  name: "buyer",
  initialState,
  reducers: {
    setBuyerData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.whatsapp = action.payload.whatsapp;
      state.category = action.payload.category;
      state.profilePic = action.payload.profilePic;
    },
    clearBuyerData: (state) => {
      state.name = "";
      state.email = "";
      state.whatsapp = "";
      state.category = "";
      state.profilePic = null;
    },
  },
});

export const { setBuyerData, clearBuyerData } = buyerSlice.actions;
export default buyerSlice.reducer;
