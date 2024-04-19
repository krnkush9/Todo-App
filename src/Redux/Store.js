import {configureStore} from "@reduxjs/toolkit";
import  todoSlice  from "./Slices/slice.js";

// creating a global store
export const store = configureStore({
    reducer: {
        list: todoSlice
    }
})