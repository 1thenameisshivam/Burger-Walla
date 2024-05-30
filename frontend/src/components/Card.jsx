/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { VITE_DELETE_BURGER } from "../config/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/orderCartslice";
const Card = ({ image, name, price, admin = false, id = null }) => {
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = async () => {
    setLoading(true);
    const data = await fetch(VITE_DELETE_BURGER + id, {
      method: "DELETE",
      credentials: "include",
    });
    const response = await data.json();
    if (response.success) {
      setLoading(false);
      toast.success(response.message);
      navigate("/");
    }
    if (!response.success) {
      setLoading(false);
      toast.error(response.message);
    }
  };

  const handleUpdate = () => {
    navigate("/dasboard/add", { state: { id, name, price, image } });
  };
  const handleClick = () => {
    dispatch(addToCart({ name, price, image }));
    toast.success("Item added to cart");
  };
  return (
    <div className="max-w-xs relative rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      {Loading && <Loader />}
      <img
        src={image}
        alt=""
        className="object-cover object-center w-52 rounded-t-md h-52 dark:bg-gray-500"
      />
      {admin && (
        <div className="top-1 absolute left-3 text-center">
          <span className="pr-14 cursor-pointer" onClick={handleUpdate}>
            🖋️
          </span>
          <span onClick={handleDelete} className="pl-20 cursor-pointer">
            ❌
          </span>
        </div>
      )}
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{price}</h2>
          <p className="dark:text-gray-800">{name}</p>
        </div>
        <button
          onClick={handleClick}
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
