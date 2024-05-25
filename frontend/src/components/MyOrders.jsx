/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

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
                <td className="p-4 border ">#sdkfsdfdsf</td>
                <td className="p-4 border ">Processing</td>
                <td className="p-4 border ">23</td>
                <td className="p-4 border ">₹{21312}</td>
                <td className="p-4 border ">COD</td>
                <td className="p-4 border ">
                  <Link to={`/order/${"asdsds"}`}>
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
