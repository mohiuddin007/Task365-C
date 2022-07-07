import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import postSlice from "../features/postSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        posts: postSlice
    }
})

export default store;