/* eslint-disable no-unused-vars */
import React from "react";

const Me = () => {
  return (
    <div className="flex flex-col justify-center max-w-s p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-600">
            Full-stack developer
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <button className="bg-violet-500 p-2 text-white rounded">
            Dasboard
          </button>
          <button className="bg-violet-500 p-2 text-white rounded">
            Oders
          </button>
          <button className="bg-violet-500 p-2 text-white rounded">
            Log-Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Me;
