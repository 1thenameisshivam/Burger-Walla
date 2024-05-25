/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="paymentsuccess">
      <main className="h-[90vh] bg-slate-200 flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl m-2 font-mono">Order Confirmed</h1>
        <p className="text-center m-2">
          Order Placed Successfully, You can check order status below
        </p>
        <Link to={"/order"} className="p-2 m-2  bg-violet-600 text-white">
          Check Status
        </Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
