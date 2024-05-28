import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

let initialState = {
  token: null,
  isAuthenticated: false,
};

const token = Cookies.get("token");
if (token) {
  initialState = {
    token,
    isAuthenticated: true,
  };
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
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, Logout } = userInfo.actions;
export default userInfo.reducer;
