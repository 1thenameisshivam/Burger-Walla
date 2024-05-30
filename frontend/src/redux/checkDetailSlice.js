import { createSlice } from "@reduxjs/toolkit";
const checkDetail = createSlice({
  name: "checkDetail",
  initialState: {
    shippingInfo: null,
    orderItems: null,
    totalAmount: null,
  },
  reducers: {
    addShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    addOrderItems: (state, action) => {
      state.orderItems = action.payload;
    },
    addTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export const { addShippingInfo, addOrderItems, addTotalAmount } =
  checkDetail.actions;
export default checkDetail.reducer;
