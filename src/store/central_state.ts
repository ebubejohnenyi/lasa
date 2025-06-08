import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product_slice";

const store = configureStore({ reducer: { product: productReducer } });

export default store;
export type RootState = ReturnType<typeof store.getState>;
