/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import Logo from "../components/Logo";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = ({ isAuthenticated = false }) => {
  return (
    <header className="text-gray-600 body-font bg-blue-600 text-white">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
          <span className="ml-3 text-xl text-grey">BurgerWalla</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer">
            Home
          </a>
          <a className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer">
            About
          </a>
          <a className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer">
            Contact
          </a>
          <a className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer">
            <IoMdCart />
          </a>
          <Link to={isAuthenticated ? "/profile" : "/login"}>
            {isAuthenticated ? (
              <span className="text-3xl cursor-pointer">
                <CgProfile />
              </span>
            ) : (
              <span className="text-3xl cursor-pointer">
                <IoLogIn />
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
