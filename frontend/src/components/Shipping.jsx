/* eslint-disable no-unused-vars */
import React from "react";
import { Country, State, City } from "country-state-city";
import { Link } from "react-router-dom";
const Shipping = () => {
  //   console.log(Country.getAllCountries());
  //   console.log(State.getStatesOfCountry("IN"));
  //   console.log(City.getCitiesOfState("IN", "PB"));
  return (
    <section className="p-6 dark:bg-gray-100 flex h-[90vh] items-center dark:text-gray-900">
      <form
        noValidate=""
        action=""
        className="container flex flex-col  mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                H.No
              </label>
              <input
                id="houseNo"
                type="text"
                placeholder="First name"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Country
              </label>
              <select
                id="country"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              >
                {Country.getAllCountries().map((country) => (
                  <option
                    className="text-black"
                    value={country.isoCode}
                    key={country.isoCode}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <select
                id="city"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              >
                <option>Hyderabad</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <select
                id="state"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              >
                <option>Telangana</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              />
            </div>
            <Link to={"/cart/confirm-order"}>
              <button className="bg-violet-600 p-2 w-48 text-white rounded">
                Confirm Order
              </button>
            </Link>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Shipping;
