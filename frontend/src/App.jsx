/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  const isAuthenticated = useSelector(
    (store) => store.userInfo.isAuthenticated
  );

  return (
    <div className="overflow-hidden">
      <Navbar isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
