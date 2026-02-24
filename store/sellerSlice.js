import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  whatsapp: "",
  businessName: "",
  categories: [],
  about: "",
  profilePic: null,
  memberSince: new Date().toISOString(),
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSellerData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearSellerData: () => initialState,
  },
});

export const { setSellerData, clearSellerData } = sellerSlice.actions;
export default sellerSlice.reducer;
