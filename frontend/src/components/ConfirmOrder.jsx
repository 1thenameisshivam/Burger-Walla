/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  VITE_CREATE_ORDER,
  VITE_ONLINE_PAYMENT,
  VITE_GET_KEY,
  VITE_ONLINE_PAYMENT_VARIFICATION,
} from "../config/constant";
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
    if (mode == "Online") {
      const keys = await fetch(VITE_GET_KEY, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const key = await keys.json();

      const order = await fetch(VITE_ONLINE_PAYMENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...data, paymentMethod: mode }),
      });
      const response = await order.json();

      var options = {
        key: key.key, // Enter the Key ID generated from the Dashboard
        amount: response.response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Burger Walla", //your business name
        description: "order payment",
        image: "https://example.com/your_logo",
        order_id: response.response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async (respons) => {
          const res = await fetch(VITE_ONLINE_PAYMENT_VARIFICATION, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
            credentials: "include",
            body: JSON.stringify({
              razorpay_payment_id: respons.razorpay_payment_id,
              razorpay_order_id: respons.razorpay_order_id,
              razorpay_signature: respons.razorpay_signature,
              order: response.order,
            }),
          });
          const data = await res.json();
          if (data.success) {
            toast.success(data.message);
            navigate("/cart/payment-success");
          } else {
            toast.error(data.message);
            navigate("/");
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          // name: "", //your customer's name
          email: response.order.shippingInfo.email, //your customer's email
        },
        notes: {
          // address: "Razorpay Corporate Office",
          order: response.order,
        },
        theme: {
          color: "#8F00FF",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
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
