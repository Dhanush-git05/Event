import React from "react";

// Import images
import ParisImg from "../assets/paris pic.webp";
import BaliImg from "../assets/Bali.webp";
import MaldivesImg from "../assets/Maldives.webp";
import NewYorkImg from "../assets/New York.webp";
import HongKongImg from "../assets/Hong Kong.webp";
import ThailandImg from "../assets/Thailand.webp";

const places = [
  {
    name: "Paris, France",
    img: ParisImg,
    rating: "4.8",
    tours: "30 tours",
    description: "Romantic city known for the Eiffel Tower and rich culture.",
  },
  {
    name: "Bali, Indonesia",
    img: BaliImg,
    rating: "4.9",
    tours: "24 tours",
    description: "Tropical paradise with stunning temples and beaches.",
  },
  {
    name: "Maldives",
    img: MaldivesImg,
    rating: "4.7",
    tours: "18 tours",
    description: "Crystal-clear waters and luxurious overwater villas.",
  },
  {
    name: "New York, USA",
    img: NewYorkImg,
    rating: "4.6",
    tours: "35 tours",
    description: "The city that never sleeps with iconic skyline views.",
  },
  {
    name: "Hong Kong",
    img: HongKongImg,
    rating: "4.5",
    tours: "20 tours",
    description: "A vibrant skyline with a mix of tradition and modernity.",
  },
  {
    name: "Thailand",
    img: ThailandImg,
    rating: "4.8",
    tours: "28 tours",
    description: "Famous for tropical beaches and ornate temples.",
  },
];

export default function TravelPage() {
  return (
    <>
      {/* ===================== */}
      {/* TOP SECTION - DESTINATIONS */}
      {/* ===================== */}
      <section id="Destinations" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">
            Popular Destinations
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {places.map((place, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                      ⭐ {place.rating}
                    </span>
                    <span className="text-sm text-gray-200">
                      {place.tours}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold mb-2">
                    {place.name}
                  </h4>

                  <p className="text-sm text-gray-200">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* BOTTOM SECTION - FEATURED TOURS */}
      {/* ===================== */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6 text-center">

          {/* View All Destinations */}
          <div className="mb-20">
            <button className="text-teal-600 font-medium hover:text-teal-700 transition duration-300">
              View all destinations →
            </button>
          </div>

          {/* Featured Tours Pill */}
          <div className="mb-6">
            <button className="bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-medium">
              Featured Tours
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unforgettable Experiences
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Handpicked tours designed to immerse you in local culture and natural beauty.
          </p>

        </div>
      </section>
    </>
  );
}