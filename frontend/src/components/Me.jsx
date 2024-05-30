/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Me = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.userInfo.userInfo);

  const handleLogout = () => {
    dispatch(Logout());
    toast.success("LogOut Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/login");
  };
  return (
    <div className="flex flex-col w-1/4 justify-center max-w-s p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{data?.name}</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-600">
            {data?.role === "admin" ? "Admin" : "User"}
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          {data?.role === "admin" && (
            <Link
              to={"/dasboard"}
              className="bg-violet-500 p-2 text-white rounded"
            >
              Dasboard
            </Link>
          )}
          <Link to={"/order"} className="bg-violet-500 p-2 text-white rounded">
            Oders
          </Link>
          <button
            onClick={handleLogout}
            className="bg-violet-500 p-2 text-white rounded"
          >
            Log-Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Me;
