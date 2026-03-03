import React from "react";

export default function TravelBlog() {
  const blogs = [
    {
      title: "Top 10 Places to Visit in Bali",
      desc: "Discover waterfalls, beaches, temples and hidden gems in Bali.",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      date: "March 10, 2026",
    },
    {
      title: "Romantic Getaway in Paris",
      desc: "Explore the city of love with this perfect 5-day itinerary.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      date: "February 25, 2026",
    },
    {
      title: "Adventures in Switzerland",
      desc: "Experience snow mountains, scenic trains and alpine villages.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      date: "January 18, 2026",
    },
    {
      title: "Maldives Luxury Travel Guide",
      desc: "Overwater villas, crystal clear water and paradise vibes.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      date: "December 30, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wanderlust Travel Blog ✈️
        </h1>
        <p className="text-lg">
          Stories, Tips & Guides from Around the World
        </p>
      </section>

      {/* Featured Blog */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
            alt="Featured Blog"
            className="md:w-1/2 h-64 md:h-auto object-cover"
          />
          <div className="p-8">
            <p className="text-sm text-gray-500 mb-2">Featured Post</p>
            <h2 className="text-2xl font-bold mb-4">
              The Ultimate Europe Backpacking Guide
            </h2>
            <p className="text-gray-600 mb-4">
              Planning a Europe trip? Here's everything you need to know
              including budget tips, best cities and hidden spots.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-6xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-lg font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.desc}
                </p>
                <button className="text-blue-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 Wanderlust Travel Blog | Designed with React & Tailwind</p>
      </footer>

    </div>
  );
}