import React from "react";

export default function JapanTrip() {
  const places = [
    {
      name: "Mount Fuji",
      desc: "Japan’s iconic mountain offering breathtaking scenic views and hiking trails.",
      img: "https://images.unsplash.com/photo-1505066836043-7d1e7e1b3d4e",
    },
    {
      name: "Tokyo Skytree",
      desc: "One of the tallest towers in the world with panoramic city views.",
      img: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    },
    {
      name: "Kyoto Temples",
      desc: "Historic temples and shrines showcasing Japan’s rich cultural heritage.",
      img: "https://images.unsplash.com/photo-1504788363733-507549153474",
    },
    {
      name: "Osaka Castle",
      desc: "A famous landmark surrounded by beautiful gardens and cherry blossoms.",
      img: "https://images.unsplash.com/photo-1583295125721-766a0085b2e4",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1505066836043-7d1e7e1b3d4e')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black/50 p-8 rounded-xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Beautiful Japan 🇯🇵
          </h1>
          <p className="text-lg">
            7 Days / 6 Nights Cultural & Modern Japan Tour
          </p>
        </div>
      </section>
    
      {/* Price Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Trip Package Price</h2>
          <p className="text-4xl font-extrabold text-red-600 mb-4">
            ₹1,45,000 / Person
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔ 4-Star Hotel Accommodation</li>
            <li>✔ Daily Breakfast & Dinner</li>
            <li>✔ Airport Transfers</li>
            <li>✔ Guided Tokyo & Kyoto City Tour</li>
            <li>✔ Bullet Train Experience</li>
          </ul>
          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition">
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
        <p>© 2026 Japan Trip Planner | Designed with ❤️ using React & Tailwind</p>
      </footer>
    
    </div>
  );
}