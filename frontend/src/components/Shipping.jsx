/* eslint-disable no-unused-vars */
import React from "react";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShippingInfo } from "../redux/checkDetailSlice";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [shippingInfo, setShippingInfo] = useState({
    hNo: "",
    country: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addShippingInfo(shippingInfo));
    navigate("/cart/confirm-order");
  };

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
                name="hNo"
                required="true"
                onChange={(e) =>
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  })
                }
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
                name="country"
                required="true"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
                onChange={(e) => {
                  setCountry(e.target.value);
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <option value="">Select Country</option>
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
                name="email"
                required="true"
                type="email"
                onChange={(e) =>
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  })
                }
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
                required="true"
                type="text"
                name="address"
                onChange={(e) =>
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Enter your Address"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <select
                required="true"
                id="city"
                name="city"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
                onChange={(e) =>
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option value="">Select City</option>
                {state &&
                  City.getCitiesOfState(country, state).map((city, index) => (
                    <option
                      className="text-black"
                      value={city.isoCode}
                      key={index}
                    >
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <select
                required="true"
                name="state"
                id="state"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
                onChange={(e) => {
                  setState(e.target.value);
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <option value="">Select State</option>
                {country &&
                  State.getStatesOfCountry(country).map((state) => (
                    <option
                      className="text-black"
                      value={state.isoCode}
                      key={state.isoCode + 2}
                    >
                      {state.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                required="true"
                name="pinCode"
                onChange={(e) =>
                  setShippingInfo({
                    ...shippingInfo,
                    [e.target.name]: e.target.value,
                  })
                }
                id="zip"
                type="text"
                placeholder=""
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 text-black"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-violet-600 p-2 w-48 text-white rounded"
            >
              Confirm Order
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Shipping;
