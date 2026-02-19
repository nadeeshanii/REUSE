// frontend/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import buyerReducer from "./buyerSlice";
import sellerReducer from "./sellerSlice";

export const store = configureStore({
  reducer: {
    buyer: buyerReducer,
    seller: sellerReducer,
  },
});
