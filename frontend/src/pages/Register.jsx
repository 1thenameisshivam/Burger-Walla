/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo";
import { VITE_REGISTER_URL } from "../config/constant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(VITE_REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      } else {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div>
      <section className="bg-gray-50">
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <Link
            to={"/"}
            className="flex items-center justify-start sm:justify-center"
          >
            <span className="bg-violet-600 text-white rounded text-2xl p-2">
              <Logo />
            </span>
            <span className="text 3xl p-2 font-mono">BurgerWalla</span>
          </Link>
          <div className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
            <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
              Sign up to our product today for free
            </h1>
            <form className="pb-1 space-y-4">
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Name
                </span>
                <input
                  className="form-input w-full p-2 rounded"
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  className="form-input w-full p-2 rounded"
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  placeholder="Ex. james@bond.com"
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Create a password
                </span>
                <input
                  className="form-input w-full p-2 rounded"
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  placeholder="••••••••"
                  name="password"
                />
              </label>
              <div className="flex flex-col items-start justify-between sm:items-center sm:flex-row">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                    Agree to Privacy Policy
                  </span>
                </label>
                <input
                  type="submit"
                  onClick={handleRegister}
                  className="w-full mt-5 btn btn-primary sm:w-auto sm:mt-0"
                  value="Sign up"
                />
              </div>
            </form>
          </div>
          <p className="my-0 text-xs font-medium text-center text-gray-700 sm:my-5">
            Already have an account?
            <Link
              to={"/login"}
              className="text-purple-700 hover:text-purple-900"
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
