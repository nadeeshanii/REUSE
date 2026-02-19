import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  whatsapp: "",
  businessName: "",
  categories: [],
  about: "",
  profilePic: null,
};

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSellerData: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearSellerData: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setSellerData, clearSellerData } = sellerSlice.actions;
export default sellerSlice.reducer;
