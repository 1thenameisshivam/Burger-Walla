import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import burgerReducer from "./burgerSlice";
import CartReducer from "./orderCartslice";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    Burgers: burgerReducer,
    Cart: CartReducer,
  },
});

export default store;
