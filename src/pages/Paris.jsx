import React from "react";
export default function ParisTrip() {
  const places = [
    {
      name: "Eiffel Tower",
      desc: "Iconic symbol of Paris offering breathtaking city views.",
      img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e",
    },
    {
      name: "Louvre Museum",
      desc: "Home to the famous Mona Lisa and thousands of artworks.",
      img: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622",
    },
    {
      name: "Notre-Dame Cathedral",
      desc: "Historic Gothic cathedral with stunning architecture.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      name: "Seine River Cruise",
      desc: "Enjoy a romantic boat cruise along the Seine River.",
      img: "https://images.unsplash.com/photo-1522098543979-ffc7f79d2d5b",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black/50 p-8 rounded-xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Beautiful Paris 🇫🇷
          </h1>
          <p className="text-lg">
            5 Days / 4 Nights Romantic Paris Getaway
          </p>
        </div>
      </section>

      {/* Price Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Trip Package Price</h2>
          <p className="text-4xl font-extrabold text-blue-600 mb-4">
            ₹1,25,000 / Person
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔ 4-Star Hotel Accommodation</li>
            <li>✔ Daily Breakfast & Dinner</li>
            <li>✔ Airport Transfers</li>
            <li>✔ Guided City Tour</li>
            <li>✔ Seine River Cruise</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Places Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Places to Explore
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={place.img}
                alt={place.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {place.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 Paris Trip Planner</p>
      </footer>

    </div>
  );
}