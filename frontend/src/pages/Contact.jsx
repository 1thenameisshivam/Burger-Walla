/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const mapIframe = document.getElementById("map-iframe");

    // Check if Geolocation is supported by the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Set the src attribute of the iframe to include the user's location
          mapIframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.512599905456!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e10e8e06d35%3A0x1f0f5436da30dfc2!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1633630621114!5m2!1sen!2sus`;
        },
        () => {
          console.log("Error getting user's location");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          id="map-iframe"
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="about:blank"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.16)",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            contact us
          </h2>
          <p className="leading-relaxed mb-5">
            Connect with us and let's create something amazing together!
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Reach out to us and let's start a conversation about your ideas and
            needs!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
