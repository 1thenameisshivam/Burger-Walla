/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

const Menu = () => {
  return (
    <div className="w-full p-4" id="menu">
      <h1 className="text-4xl mb-2 font-bold text-center">Menu</h1>
      <div className="flex gap-3">
        <Card
          image={"https://source.unsplash.com/random/300x300/?2"}
          name={"veg chease burger"}
          price={450}
        />
        <Card
          image={"https://source.unsplash.com/random/300x300/?3"}
          name={"veg burger"}
          price={350}
        />
        <Card
          image={"https://source.unsplash.com/random/300x300/?4"}
          name={"chicken burger"}
          price={550}
        />
      </div>
    </div>
  );
};

export default Menu;
