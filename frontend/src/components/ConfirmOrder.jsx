/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VITE_CREATE_ORDER } from "../config/constant";
import { addOrderItems } from "../redux/checkDetailSlice";
import { toast } from "react-toastify";
const ConfirmOrder = () => {
  const orderItems = useSelector((state) => state.Cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.CheckDetail);
  useEffect(() => {
    const filteredOrderItems = orderItems.map(({ name, price, qty }) => ({
      name,
      price,
      qty,
    }));
    dispatch(addOrderItems(filteredOrderItems));
  }, [orderItems, dispatch]);

  const [mode, setMode] = useState("COD");

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const data = {
      shippingInfo: formData.shippingInfo,
      orderItems: orderItems,
      totalAmount: formData.totalAmount,
    };
    if (mode == "COD") {
      const order = await fetch(VITE_CREATE_ORDER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...data, paymentMethod: mode }),
      });
      const response = await order.json();
      if (response.sucess) {
        toast.success(response.message);
        navigate("/cart/payment-success");
      } else {
        toast.error(response.message);
        navigate("/");
      }
    }
  };

  return (
    <section className="confirmOrder">
      <main>
        <h1 className="text-center text-3zxl font-mono m-2">Confirm Order</h1>

        <form className=" h-[90vh] flex flex-col bg-slate-200 justify-center items-center">
          <div
            onClick={() => setMode("COD")}
            className="p-2 w-96 m-2 flex justify-between bg-slate-300"
          >
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" />
          </div>
          <div
            onClick={() => setMode("Online")}
            className="p-2 w-96 m-2 flex justify-between bg-slate-300"
          >
            <label>Online</label>
            <input type="radio" name="payment" />
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-violet-600 p-2 w-44"
            type="submit"
          >
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
