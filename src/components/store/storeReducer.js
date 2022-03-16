// import { createStore } from "redux";
import authSlice from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;
