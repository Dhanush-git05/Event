import React from "react";

export default function Contact() {
  return (
    <div id="Contact" className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Wanderlust 🌍
        </h1>
        <p className="text-lg">
          Your Trusted Travel Partner for Dream Destinations
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10">
        
        {/* Contact Details */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Get in Touch
          </h2>

          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong><br />
              Wanderlust Travel Agency <br />
              21 Palm Street, MG Road <br />
              Chennai, Tamil Nadu – 600001 <br />
              India
            </p>

            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> support@wanderlusttravel.com</p>
            <p><strong>🕒 Working Hours:</strong> Mon – Sat (9:00 AM – 7:00 PM)</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 Wanderlust Travel Partner | All Rights Reserved</p>
      </footer>

    </div>
  );
}