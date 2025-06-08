import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/product/product";

const initialState: { products: Product[] } = { products: [] };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action: { payload: Product }) {
      const newProduct = action.payload;
      console.log("New Product -> ", newProduct);
      state.products.push(newProduct);
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
