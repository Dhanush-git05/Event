import React from "react";

export default function BaliTrip() {
  const places = [
    {
      name: "Uluwatu Temple",
      desc: "Clifftop sea temple famous for sunset views and Kecak dance.",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
      name: "Tegallalang Rice Terraces",
      desc: "Beautiful green rice fields with scenic walking paths.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Mount Batur",
      desc: "Popular volcano known for sunrise trekking experience.",
      img: "https://images.unsplash.com/photo-1605538883669-825aaf0f3c34",
    },
    {
      name: "Seminyak Beach",
      desc: "Relaxing beach spot with luxury resorts and sunset cafes.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1589302168068-964664d93dc0')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black/50 p-8 rounded-xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Beautiful Bali 🌴
          </h1>
          <p className="text-lg">
            5 Days / 4 Nights Exotic Bali Getaway
          </p>
        </div>
      </section>

      {/* Price Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Trip Package Price</h2>
          <p className="text-4xl font-extrabold text-green-600 mb-4">
            ₹95,000 / Person
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔ 4-Star Beach Resort Stay</li>
            <li>✔ Daily Breakfast</li>
            <li>✔ Airport Transfers</li>
            <li>✔ Island Hopping Tour</li>
            <li>✔ Mount Batur Sunrise Trek</li>
          </ul>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Places Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Places to Explore in Bali
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
        <p>© 2026 Bali Trip Planner | Designed with ❤️ using React & Tailwind</p>
      </footer>

    </div>
  );
}