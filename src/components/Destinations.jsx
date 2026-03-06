import React from "react";
import { Link } from "react-router-dom";

// Import images
import ParisImg from "../assets/paris pic.webp";
import BaliImg from "../assets/Bali.webp";
import MaldivesImg from "../assets/Maldives.webp";
import NewYorkImg from "../assets/New York.webp";
import HongKongImg from "../assets/Hong Kong.webp";
import ThailandImg from "../assets/Thailand.webp";
import PeruImg from "../assets/Peru.webp";

const places = [
  {
    name: "Paris, France",
    img: ParisImg,
    rating: "4.8",
    tours: "30 tours",
    description: "Romantic city known for the Eiffel Tower and rich culture.",
    link: "/paris",
  },
  {
    name: "Bali, Indonesia",
    img: BaliImg,
    rating: "4.9",
    tours: "24 tours",
    description: "Tropical paradise with stunning temples and beaches.",
    link: "/bali",
  },
  {
    name: "Maldives",
    img: MaldivesImg,
    rating: "4.7",
    tours: "18 tours",
    description: "Crystal-clear waters and luxurious overwater villas.",
    link: "/maldives",
  },
  {
    name: "New York, USA",
    img: NewYorkImg,
    rating: "4.6",
    tours: "35 tours",
    description: "The city that never sleeps with iconic skyline views.",
    link: "/newyork",
  },
  {
    name: "Hong Kong",
    img: HongKongImg,
    rating: "4.5",
    tours: "20 tours",
    description: "A vibrant skyline with a mix of tradition and modernity.",
    link: "/hongkong",
  },
  {
    name: "Thailand",
    img: ThailandImg,
    rating: "4.8",
    tours: "28 tours",
    description: "Famous for tropical beaches and ornate temples.",
    link: "/thailand",
  },
  {
    name: "Peru Nagar",
    img: PeruImg,
    rating: "4.8",
    tours: "28 tours",
    description: "Beautiful destination with amazing culture.",
    link: "/peru",
  },
];

export default function TravelPage() {
  return (
    <section id="Destinations" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {places.map((place, index) => (

            <Link to={place.link} key={index}>

              <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">

                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-0 p-6 text-white">

                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-yellow-400 font-semibold">
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

            </Link>

          ))}
        </div>

      </div>
    </section>
  );
}