/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CartCard = ({ name, price }) => {
  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
          alt="Black Leather Purse"
          className="h-full object-center object-cover md:block hidden"
        />
        <img
          src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
          alt="Black Leather Purse"
          className="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-gray-800">
            Luxe card holder
          </p>
          <select
            aria-label="Select quantity"
            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
          Remove
        </p>
      </div>
      <p className="text-base font-black leading-none text-gray-800">1000</p>
    </div>
  );
};

export default CartCard;
