/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";

const AdminOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass flex items-center justify-center h-[90vh] ">
      <main>
        <table>
          <thead>
            <tr>
              <th className="bg-violet-600 text-white ">Order Id</th>
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
                <td className="p-4 border ">#sdkfsdfdsf</td>
                <td className="p-4 border ">Processing</td>
                <td className="p-4 border ">23</td>
                <td className="p-4 border ">₹{21312}</td>
                <td className="p-4 border ">COD</td>
                <td className="p-4 border ">Abhi</td>
                <td className="p-4 border ">
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>

                  <button>
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
