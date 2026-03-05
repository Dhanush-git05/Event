import React from "react";

const trips = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description:
      "Paris is known as the City of Love and Lights. Famous for art, fashion, food, and romantic architecture.",
    time: "April – June, September – October",
    attractions: "Eiffel Tower, Louvre Museum, Notre Dame Cathedral",
    budget: "$1500 - $2500",
    duration: "5 Days",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Bali is a tropical paradise known for beaches, temples, rice terraces, and vibrant culture.",
    time: "April – October",
    attractions: "Uluwatu Temple, Ubud Monkey Forest, Tanah Lot",
    budget: "$800 - $1500",
    duration: "6 Days",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Maldives is famous for luxury water villas, clear blue water, coral reefs, and honeymoon trips.",
    time: "November – April",
    attractions: "Water Villas, Coral Reefs, Scuba Diving",
    budget: "$2000 - $4000",
    duration: "4 Days",
  },
  {
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695f3b8",
    description:
      "New York City is a global hub famous for skyscrapers, Broadway shows, and iconic landmarks.",
    time: "April – June, September – November",
    attractions: "Statue of Liberty, Times Square, Central Park",
    budget: "$1500 - $3000",
    duration: "5 Days",
  },
  {
    name: "Hong Kong",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    description:
      "Hong Kong is a vibrant city known for skyline views, shopping, and delicious street food.",
    time: "October – December",
    attractions: "Victoria Peak, Disneyland, Tian Tan Buddha",
    budget: "$1200 - $2200",
    duration: "4 Days",
  },
  {
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description:
      "Thailand offers stunning beaches, temples, nightlife, and delicious cuisine.",
    time: "November – February",
    attractions: "Phi Phi Islands, Grand Palace, Phuket Beaches",
    budget: "$900 - $1800",
    duration: "6 Days",
  },
];

export default function Trips() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        World Tour Destinations
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={trip.image}
              alt={trip.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{trip.name}</h2>

              <p className="text-gray-600 mb-3">{trip.description}</p>

              <p className="text-sm">
                <span className="font-semibold">Best Time:</span> {trip.time}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Top Attractions:</span>{" "}
                {trip.attractions}
              </p>

              <p className="text-sm">
                <span className="font-semibold">Budget:</span> {trip.budget}
              </p>

              <p className="text-sm mb-4">
                <span className="font-semibold">Duration:</span> {trip.duration}
              </p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Book Trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}