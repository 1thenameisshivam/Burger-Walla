/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ image, name, price, admin = false }) => {
  return (
    <div className="max-w-xs relative  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-52 rounded-t-md h-52 dark:bg-gray-500"
      />
      {admin && (
        <div className=" top-1  absolute left-3 text-center">
          <span className="pr-14 ">🖋️</span>
          <span className="pl-20 ">❌</span>
        </div>
      )}

      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{price}</h2>
          <p className="dark:text-gray-800">{name}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;
