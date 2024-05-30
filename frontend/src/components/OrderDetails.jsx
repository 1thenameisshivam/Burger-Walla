/* eslint-disable no-unused-vars */

import React from "react";
import { useState, useEffect } from "react";
import { VITE_GET_ORDERS } from "../config/constant";
import { useParams } from "react-router-dom";
const OrderDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMyOrders();
  }, []);
  const fetchMyOrders = async () => {
    const data = await fetch(VITE_GET_ORDERS + id, {
      method: "GET",
      credentials: "include",
    });
    const response = await data.json();
    setDetails(response.orders);
  };
  return (
    <section className="orderDetails bg-violet-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-3/4">
            <h1 className="text-3xl font-bold mb-8">Order Details</h1>

            <div className="mb-8">
              <h1 className="text-xl font-bold mb-2">Shipping</h1>
              <p className="text-gray-700">
                <b>
                  Address: {details?.shippingInfo?.address} ,{" "}
                  {details?.shippingInfo?.city}
                </b>
              </p>
            </div>

            <div className="mb-8">
              <h1 className="text-xl font-bold mb-2">Contact</h1>
              <p className="text-gray-700">
                <b>Name: {details?.user?.name}</b>
              </p>
              <p className="text-gray-700">
                <b>Email: {details?.user?.email}</b>
              </p>
            </div>

            <div className="mb-8">
              <h1 className="text-xl font-bold mb-2">Status</h1>
              <p className="text-gray-700">
                <b>Order Status:</b> {details?.orderStatus}
              </p>
              <p className="text-gray-700">
                <b>Placed At: </b>
                {details?.createdAt?.split(":")[0].slice(0, 10)}
              </p>
              {details?.paymentMethod == "Online" && (
                <p className="text-gray-700">
                  <b>Delivered At:</b> 23-02-2003
                </p>
              )}
            </div>

            <div className="mb-8">
              <h1 className="text-xl font-bold mb-2">Payment</h1>
              <p className="text-gray-700">
                <b>Payment Method: </b>
                {details?.paymentMethod}
              </p>
              <p className="text-gray-700">
                <b>Payment Reference: </b>
                {details?._id}
              </p>
              <p className="text-gray-700">
                {details?.paymentMethod == "Online" && (
                  <b>Paid At: 23-02-2003</b>
                )}
              </p>
            </div>

            <div className="mb-8">
              <h1 className="text-xl font-bold mb-2">Amount</h1>
              <p className="text-gray-700">
                <b>Items Total:</b> ₹ {details?.totalAmount - 100}
              </p>
              <p className="text-gray-700">
                <b>Shipping Charges:</b> ₹ 100
              </p>
              <p className="text-gray-700">
                <b>Tax:</b> ₹ 0.00
              </p>
              <p className="text-gray-700">
                <b>Total Amount:</b> ₹ {details?.totalAmount}
              </p>
            </div>

            <article className="mb-8">
              <h1 className="text-xl font-bold mb-4">Ordered Items</h1>
              {details?.orderItems?.map((burger) => (
                <div key={burger.name} className="flex items-center mb-4">
                  <div className="w-1/2">
                    <h4 className="text-lg font-bold">{burger.name}</h4>
                  </div>
                  <div className="w-1/2 text-right">
                    <span className="text-gray-700">
                      {burger.qty} x ₹ {burger.price}
                    </span>
                  </div>
                </div>
              ))}

              <div className="flex items-center">
                <div className="w-1/2">
                  <h4 className="text-lg font-bold">Sub Total</h4>
                </div>
                <div className="w-1/2 text-right">
                  <span className="text-gray-700">
                    ₹ {details?.totalAmount}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
};

export default OrderDetails;
