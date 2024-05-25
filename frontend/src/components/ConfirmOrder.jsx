/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  return (
    <section className="confirmOrder">
      <main>
        <h1 className="text-center text-3zxl font-mono m-2">Confirm Order</h1>

        <form className=" h-[90vh] flex flex-col bg-slate-200 justify-center items-center">
          <div className="p-2 w-96 m-2 flex justify-between bg-slate-300">
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" />
          </div>
          <div className="p-2 w-96 m-2 flex justify-between bg-slate-300">
            <label>Online</label>
            <input type="radio" name="payment" />
          </div>

          <Link to={"/cart/payment-success"}>
            <button className="bg-violet-600 p-2 w-44" type="submit">
              Place Order
            </button>
          </Link>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
