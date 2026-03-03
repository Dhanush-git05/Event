import React from "react";

export default function TravelGuide() {
  const guides = [
    {
      place: "Bali, Indonesia",
      desc: "Best time to visit: April to October. Explore beaches, temples, waterfalls and rice terraces.",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
      place: "Paris, France",
      desc: "Best time to visit: April to June. Visit Eiffel Tower, Louvre Museum and enjoy Seine cruise.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      place: "Switzerland",
      desc: "Best time to visit: December to March for snow, June to September for scenic beauty.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      place: "Maldives",
      desc: "Best time to visit: November to April. Perfect for luxury resorts and water activities.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  ];

  const tips = [
    "Always carry travel insurance.",
    "Keep digital and physical copies of important documents.",
    "Respect local culture and traditions.",
    "Pack light but smart.",
    "Exchange some local currency before arrival.",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wanderlust Travel Guide 🌍
        </h1>
        <p className="text-lg">
          Everything You Need to Plan Your Perfect Trip
        </p>
      </section>

      {/* Destination Guides */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Destination Guides
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={guide.img}
                alt={guide.place}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {guide.place}
                </h3>
                <p className="text-gray-600 text-sm">
                  {guide.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Essential Travel Tips ✈️
          </h2>

          <ul className="space-y-4 text-gray-700">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-xl shadow-sm"
              >
                ✔ {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-emerald-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6">
          Let Wanderlust help you plan the perfect vacation.
        </p>
        <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Plan My Trip
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 Wanderlust Travel Guide | All Rights Reserved</p>
      </footer>

    </div>
  );
}