/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { VITE_ADD_BURGER } from "../config/constant";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
const AddBurger = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    image: null,
  });

  const handleAddBurger = async (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("image", data.image);

    try {
      const data = await fetch(VITE_ADD_BURGER, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const response = await data.json();
      if (response.sucess) {
        setLoader(false);
        toast.success(response.message);
        setData({ name: "", price: "", image: null });
      } else {
        setLoader(false);
        toast.error(response.message);
      }
    } catch (err) {
      setLoader(false);
      toast.error(err);
    }
  };
  return (
    <div className="flex relative justify-center items-center h-screen bg-purple-500">
      {loader && <Loader />}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Link
          to={"/"}
          className="flex items-center justify-start sm:justify-center p-2"
        >
          <span className="bg-violet-600 text-white rounded text-2xl p-2">
            <Logo />
          </span>
          <span className="text 3xl p-2 font-mono">BurgerWalla</span>
        </Link>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="burgerName"
          >
            Name of Burger
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="burgerName"
            name="name"
            value={data.name}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Enter name of burger"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="burgerPrice"
          >
            Price of Burger
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="burgerPrice"
            name="price"
            value={data.price}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Enter price of burger"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="burgerImage"
          >
            Burger Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="burgerImage"
            name="image"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.files[0] })
            }
            type="file"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleAddBurger}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBurger;
