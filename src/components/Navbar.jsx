import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Aboutus from "./Aboutus";
import Tours from "./Tours";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

         <Link to="/" className="text-2xl font-bold text-gray-800">
  Wander<span className="text-yellow-500">lust</span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#Destinations" className="hover:text-yellow-500 transition">
              Destinations
            </a>

            <a href="#Tours" className="hover:text-yellow-500 transition">
              Tours
            </a>

            <a href="#Aboutus" className="hover:text-yellow-500 transition">
              About
            </a>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-yellow-500 transition">
                Resources <ChevronDown size={16} className="ml-1" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-48 py-2">
                  <a href="/TravelBlog" className="block px-4 py-2 hover:bg-gray-100">
                    Travel Blog
                  </a>
                  <a href="/TravelGuides" className="block px-4 py-2 hover:bg-gray-100">
                    Travel Guides
                  </a>
                  <a href="/FAQ" className="block px-4 py-2 hover:bg-gray-100">
                    FAQ
                  </a>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
          <a href="#" className="block py-2">Destinations</a>
          <a href="#" className="block py-2">Tours</a>
          <a href="/About" className="block py-2">About</a>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full justify-between py-2"
            >
              Resources <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="pl-4 space-y-2">
                <a href="#" className="block">Travel Blog</a>
                <a href="#" className="block">Travel Guides</a>
                <a href="#" className="block">FAQ</a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="block bg-yellow-500 text-white text-center py-2 rounded-full mt-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}