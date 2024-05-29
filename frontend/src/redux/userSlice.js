import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

let initialState = {
  token: null,
  isAuthenticated: false,
  userInfo: null,
};

const token = Cookies.get("token");
if (token) {
  initialState.token = token;
  initialState.isAuthenticated = true;
}

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.token = Cookies.get("token");
      state.isAuthenticated = true;
    },
    Logout: (state) => {
      state.token = null;
      Cookies.remove("token");
      state.userInfo = null;
      state.isAuthenticated = false;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin, Logout, setUserInfo } = userInfo.actions;
export default userInfo.reducer;
