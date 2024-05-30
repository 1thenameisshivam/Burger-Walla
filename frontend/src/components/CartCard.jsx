/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/orderCartslice";
const CartCard = ({ name, price, image, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={image}
          alt="Black Leather Purse"
          className="h-44 w-44 rounded object-center object-cover md:block hidden"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-gray-800">
            {name}
          </p>
          <div
            aria-label="Select quantity"
            className="p-3 px-1 border border-gray-200 mr-6 focus:outline-none"
          >
            <span>
              <span
                onClick={() => dispatch(increaseQuantity({ name }))}
                className="p-2 cursor-pointer "
              >
                ➕
              </span>
              <span className="p-2">{qty}</span>
              <span
                onClick={() => dispatch(decreaseQuantity({ name }))}
                className="p-2 cursor-pointer"
              >
                ➖
              </span>
            </span>
          </div>
        </div>
        <p
          onClick={() => dispatch(removeFromCart({ name }))}
          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
        >
          Remove
        </p>
      </div>
      <p className="text-base font-black leading-none text-gray-800">{price}</p>
    </div>
  );
};

export default CartCard;
