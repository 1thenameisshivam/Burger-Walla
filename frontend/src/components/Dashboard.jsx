/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";

ChartJS.register(Tooltip, ArcElement, Legend);

const loading = false;

const Box = ({ title, value }) => (
  <div className="bg-violet-500 p-4 w-20 h-20 text-white flex flex-col items-center m-4 rounded-full">
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article className="bg-gray-200 flex justify-around">
            <Box title="Users" value={213} />
            <Box title="Orders" value={23} />
            <Box title="Income" value={21323} />
          </article>

          <section className="flex items-center justify-center gap-6 h-[70vh]">
            <div className="flex flex-col">
              <Link
                className="bg-violet-500 text-white p-3 text-2xl rounded m-2"
                to="/admin/orders"
              >
                View Orders
              </Link>
              <Link
                className="bg-violet-500 text-white p-3 text-2xl rounded m-2"
                to="/admin/users"
              >
                View Users
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                className="bg-violet-500 text-white p-3 text-2xl rounded m-2"
                to="/dasboard/add"
              >
                Add Items
              </Link>
              <Link
                className="bg-violet-500 text-white p-3 text-2xl rounded m-2"
                to="/admin/users"
              >
                View ALL Items
              </Link>
            </div>
            <aside className="w-96 h-96">
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default Dashboard;
