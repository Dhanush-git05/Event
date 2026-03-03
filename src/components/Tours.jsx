import React from "react";
import Paris from "../pages/Paris"
import { Link } from "react-router-dom";

const places = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The city of lights and love, home to the Eiffel Tower.",
  
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "A tropical paradise with beaches and temples.",
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1498496294664-d9372eb521f3",
    description: "Luxury city known for Burj Khalifa and desert safari.",
  },
  {
    id: 4,
    name: "New York",
    country: "USA",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    description: "The city that never sleeps.",
  },
];

const TouristPlaces = () => {
  return ( 
    <div id="Tours" className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          🌍 Explore Beautiful Tourist Places
        </h1>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {places.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {place.name}
                </h2>
                <p className="text-sm text-blue-600 mb-2">
                  {place.country}
                </p>
                <p className="text-gray-600 text-sm">
                  {place.description}

                </p>
                {place.name === "Paris" && (
                <Link to="/Paris">
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                 <div >View Details</div>
                </button>
                </Link>
            )}
                 {place.name === "Bali" && (
                <Link to="/Bali">
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                 <div >View Details</div>
                </button>
                </Link>
            )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TouristPlaces;