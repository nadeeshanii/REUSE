// frontend/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import buyerReducer from "./buyerSlice";
import sellerReducer from "./sellerSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    buyer: buyerReducer,
    seller: sellerReducer,
    user: userReducer,
    product: productReducer,
  },
});

