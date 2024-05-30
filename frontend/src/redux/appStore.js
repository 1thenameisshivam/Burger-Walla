import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import burgerReducer from "./burgerSlice";
import CartReducer from "./orderCartslice";
import checkDetailReducer from "./checkDetailSlice";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    Burgers: burgerReducer,
    Cart: CartReducer,
    CheckDetail: checkDetailReducer,
  },
});

export default store;
