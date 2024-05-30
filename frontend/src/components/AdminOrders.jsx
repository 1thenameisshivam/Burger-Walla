/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useState, useEffect } from "react";
import { VITE_GET_ADMIN_ORDERS, VITE_CHANGE_STATUS } from "../config/constant";
import { toast } from "react-toastify";
const AdminOrders = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetchMyOrders();
  }, []);
  const fetchMyOrders = async () => {
    const data = await fetch(VITE_GET_ADMIN_ORDERS, {
      method: "GET",
      credentials: "include",
    });
    const response = await data.json();
    setArr(response.orders);
  };
  const handleChangeStatus = async (id) => {
    const data = await fetch(VITE_CHANGE_STATUS + id, {
      method: "GET",
      credentials: "include",
    });
    const response = await data.json();
    if (response.success) {
      toast.success(response.message);
      fetchMyOrders();
    } else {
      toast.error(response.message);
    }
  };
  return (
    <section className="tableClass flex items-center justify-center mt-9 mb-5 min-h-[90vh] ">
      <main>
        <table>
          <thead>
            <tr>
              <th className="bg-violet-600 text-white p-2 ">Order Id</th>
              <th className="bg-violet-600 text-white ">Status</th>
              <th className="bg-violet-600 text-white ">Item Qty</th>
              <th className="bg-violet-600 text-white ">Amount</th>
              <th className="bg-violet-600 text-white ">Payment Method</th>
              <th className="bg-violet-600 text-white ">User</th>
              <th className="bg-violet-600 text-white ">Action</th>
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
                <td className="p-4 border ">{i.user.name}</td>
                <td className="p-4 border flex gap-3 ">
                  <Link to={`/order/${i._id}`}>
                    <AiOutlineEye />
                  </Link>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleChangeStatus(i._id);
                    }}
                  >
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default AdminOrders;
