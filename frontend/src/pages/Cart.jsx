/* eslint-disable no-unused-vars */
import React from "react";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTotalAmount } from "../redux/checkDetailSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Cart);
  if (data) {
    dispatch(addTotalAmount(data.totalPrice + 100));
  }
  const totalItem = data.cart.length;

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">Total Items: {totalItem}</h2>
          </div>
          {data?.cart.map((item, index) => (
            <CartCard key={index} {...item} />
          ))}
          <Link
            to={"/"}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        {totalItem > 0 && (
          <div
            id="summary"
            className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Total Items: {totalItem}
              </span>
              <span className="font-semibold text-sm">{data?.totalPrice}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <div className="block p-2 text-gray-600 w-full text-sm">
                Standard shipping - Rs:100.00
              </div>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                {totalItem && <span>{data?.totalPrice + 100}</span>}
              </div>
              <Link to={"/cart/shipping"}>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
