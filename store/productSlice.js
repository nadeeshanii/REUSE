import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      title: "Used Laptop",
      description: "Good condition, 8GB RAM",
      category: "electronics",
      whatsapp: "94771234567",
      image: "/1.png",
      location: "Colombo",
    },
    {
      title: "Fashion Jacket",
      description: "Almost new, size M",
      category: "fashion",
      whatsapp: "94779876543",
      image: "/1.png",
      location: "Negombo",
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
