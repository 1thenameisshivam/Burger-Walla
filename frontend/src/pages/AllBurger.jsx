/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
const AllBurger = () => {
  const data = useSelector((state) => state.Burgers?.burgers?.burgers);
  return (
    <div className="flex flex-wrap gap-3 w-screen p-5 min-h-screen overflow-hidden">
      {data?.map((value) => (
        <Card
          admin={true}
          id={value._id}
          key={value._id}
          image={value.image}
          name={value.name}
          price={value.price}
        />
      ))}
    </div>
  );
};

export default AllBurger;
