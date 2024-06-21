import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/CounterSlice";
import productsSlice from "../slices/ProductsSlice";
export const store = configureStore({
    reducer: {
        counterSlice,
        productsSlice
    }
});