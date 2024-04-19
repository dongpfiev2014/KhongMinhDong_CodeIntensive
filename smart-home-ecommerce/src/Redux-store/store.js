import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../Redux-reducer/darkModeSlice";
import authenReducer from "../Redux-reducer/auth";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    authen: authenReducer,
  },
});
