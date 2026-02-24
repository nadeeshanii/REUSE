import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Vintage Chair",
      price: 2500,
      description: "Comfortable wooden vintage chair in good condition.",
      image: "/items/chair1.jpg",
      location: "Colombo",
      category: "Furniture",
      condition: "Used",
      postedDate: "2026-02-20",
      sellerName: "Green Furniture Store",
    },
    {
      id: 2,
      name: "iPhone 12",
      price: 120000,
      description: "iPhone 12 128GB. Excellent condition.",
      image: "/items/phone1.jpg",
      location: "Kandy",
      category: "Electronics",
      condition: "Like New",
      postedDate: "2026-02-18",
      sellerName: "Tech World",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
