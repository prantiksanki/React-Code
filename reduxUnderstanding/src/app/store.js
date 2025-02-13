import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"; // Check the path

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
