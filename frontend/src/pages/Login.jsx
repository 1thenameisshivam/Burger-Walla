/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
const Login = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <Link
            to={"/"}
            title="Kutty Home Page"
            className="flex items-center justify-start sm:justify-center"
          >
            <span className="bg-violet-600 text-white rounded text-2xl p-2">
              <Logo />
            </span>
            <span className="text 3xl p-2 font-mono">BurgerWalla</span>
          </Link>
          <div className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
            <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
              Log in to your account
            </h1>
            <form className="pb-1 space-y-4">
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  className="form-input w-full p-2 rounded"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  name="email"
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Password
                </span>
                <input
                  className="form-input w-full p-2 rounded"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                />
              </label>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                    Remember me
                  </span>
                </label>
                <input
                  type="submit"
                  className="btn btn-primary cursor-pointer"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <p className="mb-4 space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0">
            <a href="#" className="w-full btn btn-sm btn-link sm:w-auto p-2">
              Forgot password
            </a>
            <Link
              to={"/register"}
              className="w-full btn btn-sm btn-link p-2 sm:w-auto"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
