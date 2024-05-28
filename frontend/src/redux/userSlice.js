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
    Login: (state, action) => {
      state.token = action.payload;
    },
    Logout: (state) => {
      state.token = null;
    },
  },
});

export const { Login, setUser } = userInfo.actions;
export default userInfo.reducer;
