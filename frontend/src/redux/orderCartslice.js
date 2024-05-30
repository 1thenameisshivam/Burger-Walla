import { createSlice } from "@reduxjs/toolkit";
const Cart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price, image } = action.payload;
      const existingItem = state.cart.find((item) => item.name === name);
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.totalPrice = existingItem.qty * price; // Calculate total price
      } else {
        state.cart.push({ name, price, image, qty: 1, totalPrice: price });
      }
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeFromCart: (state, action) => {
      const { name } = action.payload;
      state.cart = state.cart.filter((item) => item.name !== name);
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const { name } = action.payload;
      const item = state.cart.find((item) => item.name === name);
      if (item) {
        item.qty += 1;
        item.totalPrice = item.qty * item.price; // Update total price
      }
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    decreaseQuantity: (state, action) => {
      const { name } = action.payload;
      const item = state.cart.find((item) => item.name === name);
      if (item && item.qty > 1) {
        item.qty -= 1;
        item.totalPrice = item.qty * item.price; // Update total price
      }
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    calculateTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
} = Cart.actions;

export default Cart.reducer;
