import React from "react";

export default function PeruTrip() {
  const places = [
    {
      name: "Machu Picchu",
      desc: "Ancient Incan citadel set high in the Andes Mountains.",
      img: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
    },
    {
      name: "Cusco",
      desc: "Historic city known for its archaeological remains and Spanish colonial architecture.",
      img: "https://images.unsplash.com/photo-1549887534-2f5f7e3f5b5e",
    },
    {
      name: "Rainbow Mountain",
      desc: "Famous for its naturally colorful striped mountain landscapes.",
      img: "https://images.unsplash.com/photo-1544989164-31dc3c645987",
    },
    {
      name: "Lake Titicaca",
      desc: "The world’s highest navigable lake with unique floating islands.",
      img: "https://images.unsplash.com/photo-1526401485004-2fda9f28b1a9",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black/50 p-8 rounded-xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Beautiful Peru 🇵🇪
          </h1>
          <p className="text-lg">
            6 Days / 5 Nights Andean Adventure Tour
          </p>
        </div>
      </section>

      {/* Price Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Trip Package Price</h2>
          <p className="text-4xl font-extrabold text-emerald-600 mb-4">
            ₹1,20,000 / Person
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔ 4-Star Hotel Accommodation</li>
            <li>✔ Daily Breakfast & Dinner</li>
            <li>✔ Airport Transfers</li>
            <li>✔ Guided Machu Picchu Tour</li>
            <li>✔ Sacred Valley Excursion</li>
          </ul>
          <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition">
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
        <p>© 2026 Peru Trip Planner | Designed with ❤️ using React & Tailwind</p>
      </footer>

    </div>
  );
}