/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Taste the Best with
          <span className="dark:text-violet-600">BurgerWalla's</span>
          Finest
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Discover BurgerWalla: Where flavor meets passion. Enjoy handcrafted
          burgers made with the freshest ingredients for an unforgettable taste
          experience.
        </p>
        <div className="flex flex-wrap justify-center">
          <a
            href="#menu"
            className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Explore Menu
          </a>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
