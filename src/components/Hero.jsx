// src/components/Hero.jsx
import React from "react";
import bannerImg from "../assets/shutterstock_120633745.jpg";

const TravelBanner = () => {
  return (
    <section id="Hero"
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl text-center text-white">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Explore breathtaking destinations around the world with our expertly curated tours.
          From ancient wonders to tropical paradises, your dream vacation awaits.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-sm">Destinations</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">200+</h3>
            <p className="text-sm">Tour Packages</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">15k+</h3>
            <p className="text-sm">Happy Travelers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-sm">Satisfaction Rate</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 text-gray-800">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Destination */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Destination</label>
              <input
                type="text"
                placeholder="Where to?"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Check In */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Check In</label>
              <input
                type="date"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Check Out</label>
              <input
                type="date"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Travelers */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Travelers</label>
              <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
                <option>4+ Travelers</option>
              </select>
            </div>
          </form>

          {/* Search Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
              Search Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBanner;