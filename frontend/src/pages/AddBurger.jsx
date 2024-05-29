/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { VITE_ADD_BURGER, VITE_UPDATE_BURGER } from "../config/constant";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const AddBurger = () => {
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [burgerId, setBurgerId] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { name, price, image, id } = location.state;
      setData({ name, price, image });
      setBurgerId(id);
      setIsUpdate(true);
    }
  }, [location.state]);

  const handleAddBurger = async (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("image", data.image);

    try {
      const url = isUpdate ? VITE_UPDATE_BURGER + burgerId : VITE_ADD_BURGER;
      const method = isUpdate ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        credentials: "include",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setLoader(false);
        toast.success(result.message);
        setData({ name: "", price: "", image: null });
        navigate("/");
      } else {
        setLoader(false);
        toast.error(result.message);
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
          to="/"
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
            {isUpdate ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBurger;
