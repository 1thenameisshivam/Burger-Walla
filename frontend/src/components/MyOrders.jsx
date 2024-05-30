/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { VITE_CREATE_ORDER } from "../config/constant";
const MyOrders = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetchMyOrders();
  }, []);
  const fetchMyOrders = async () => {
    const data = await fetch(VITE_CREATE_ORDER, {
      method: "GET",
      credentials: "include",
    });
    const response = await data.json();
    setArr(response.orders);
  };
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead className="bg-violet-600 text-white rounded">
            <tr>
              <th className="p-4 ">Order Id</th>
              <th className="p-4 ">Status</th>
              <th className="p-4 ">Item Qty</th>
              <th className="p-4 ">Amount</th>
              <th className="p-4 ">Payment Method</th>
              <th className="p-4 ">Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td className="p-4 border ">{i._id}</td>
                <td className="p-4 border ">{i.orderStatus}</td>
                <td className="p-4 border ">{i.orderItems.length}</td>
                <td className="p-4 border ">₹{i.totalAmount}</td>
                <td className="p-4 border ">{i.paymentMethod}</td>
                <td className="p-4 border ">
                  <Link to={`/order/${i._id}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
