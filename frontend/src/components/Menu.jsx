/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
const Menu = () => {
  const data = useSelector((state) => state.Burgers?.burgers?.burgers);
  return (
    <div className="w-full p-4" id="menu">
      <h1 className="text-4xl mb-2 font-bold text-center">Menu</h1>
      <div className="flex gap-3 flex-wrap">
        {data?.map((value) => (
          <Card
            key={value._id}
            image={value.image}
            name={value.name}
            price={value.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
