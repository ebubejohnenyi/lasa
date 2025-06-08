import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../model/product/product";

const initialState: { products: Product[] } = { products: [] };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart(state, action: { payload: Product }) {
      const newProduct = action.payload;
      const foundIndex = state.products.findIndex(
        (item) => item.id === newProduct.id
      );

      if (foundIndex !== -1) {
        state.products[foundIndex] = {
          ...state.products[foundIndex],
          quantity: state.products[foundIndex].quantity + 1,
        };
      } else {
        state.products.push(newProduct);
      }
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
