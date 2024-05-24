/* eslint-disable no-unused-vars */
import FounderSection from "../components/FounderSection";
import HeroSection from "../components/HeroSection";
import React from "react";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <FounderSection />
      <Menu />
    </div>
  );
};

export default Home;
