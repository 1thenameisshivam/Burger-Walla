import { createSlice } from "@reduxjs/toolkit";
const Burgers = createSlice({
  name: "Burgers",
  initialState: {
    burgers: null,
  },
  reducers: {
    setBurgers: (state, action) => {
      state.burgers = action.payload;
    },
  },
});

export const { setBurgers } = Burgers.actions;
export default Burgers.reducer;
