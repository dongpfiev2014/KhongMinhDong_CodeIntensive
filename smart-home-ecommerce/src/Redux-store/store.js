import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../Redux-reducer/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
