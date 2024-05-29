import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import burgerReducer from "./burgerSlice";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    Burgers: burgerReducer,
  },
});

export default store;
