/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import Logo from "../components/Logo";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSetUserData } from "../hooks/useSetUserData";
const Navbar = ({ isAuthenticated = false }) => {
  useSetUserData();
  return (
    <header className=" body-font bg-violet-600 text-white">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
          <span className="ml-3 text-xl text-grey">BurgerWalla</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to={"/"}
            className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer"
          >
            Home
          </Link>
          {isAuthenticated && (
            <Link
              to={"/order"}
              className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer"
            >
              My Orders
            </Link>
          )}
          <Link
            to={"/about"}
            className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to={"/cart"}
            className="mr-5 hover:text-black hover:bg-white rounded p-2 px-4 cursor-pointer"
          >
            <span className="text-2xl cursor-pointer">
              <IoMdCart />
            </span>
          </Link>
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
