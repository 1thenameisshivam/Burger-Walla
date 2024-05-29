/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CheckAuth = ({ children, adminOnly }) => {
  const navigate = useNavigate();
  const { userInfo, isAuthenticated } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please Login First", {
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
    } else if (adminOnly && userInfo?.role !== "admin") {
      toast.error("You are not Admin", {
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
    }
  }, [isAuthenticated, userInfo?.role, adminOnly]);

  return children;
};

export default CheckAuth;
