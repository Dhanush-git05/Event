import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      {/* Branding & Social */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10">
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold text-white">Wanderlust</h2>
          <p className="mt-2 text-sm">
            Discover extraordinary destinations and create unforgettable
            memories with our curated travel experiences
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-400 mt-4">
            <a href="https://www.instagram.com/gtholidays.in/" className="flex items-center gap-2 hover:text-white">
              <FaInstagram className="text-pink-500" />
              Instagram
            </a>

            <a href="https://www.facebook.com/@gtholidays/" className="flex items-center gap-2 hover:text-white">
              <FaFacebook className="text-blue-600" />
              Facebook
            </a>

            <a href="https://www.youtube.com/@GTHolidaysLtd" className="flex items-center gap-2 hover:text-white">
              <FaTwitter className="text-sky-400" />
              Twitter
            </a>

            <a href="https://www.youtube.com/@GTHolidaysLtd" className="flex items-center gap-2 hover:text-white">
              <FaYoutube className="text-red-600" />
              YT
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:w-2/3">
          <div>
            <h3 className="text-white font-semibold mb-3">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Bali</a></li>
              <li><a href="#" className="hover:text-white">Greece</a></li>
              <li><a href="#" className="hover:text-white">Japan</a></li>
              <li><a href="#" className="hover:text-white">Peru</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-gray-800 rounded-lg p-6 mb-10">
        <h3 className="text-white font-semibold mb-2">
          Subscribe for exclusive deals, travel tips, and destination guides.
        </h3>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Wanderlust. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;