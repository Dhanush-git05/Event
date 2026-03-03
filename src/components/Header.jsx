import React, { useState } from "react";
import { FaDesktop, FaTabletAlt, FaMobileAlt, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold">
          colorlib<span className="text-green-500">.</span>
        </div>
        <div className="hidden md:block font-semibold">+ WANDERLUST</div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Device Icons */}
        <div className="hidden md:flex items-center space-x-3 text-gray-300">
          <FaDesktop className="hover:text-white cursor-pointer" />
          <FaTabletAlt className="hover:text-white cursor-pointer" />
          <FaMobileAlt className="hover:text-white cursor-pointer" />
        </div>

        {/* Heart */}
        <FaHeart className="hover:text-red-500 cursor-pointer" />

        {/* Cart */}
        <FaShoppingCart className="text-green-500 cursor-pointer" />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaMobileAlt />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center py-6 space-y-4 md:hidden">
          <div className="font-semibold">+ WANDERLUST</div>
          <div className="flex space-x-6 text-gray-300">
            <FaDesktop className="hover:text-white cursor-pointer" />
            <FaTabletAlt className="hover:text-white cursor-pointer" />
            <FaMobileAlt className="hover:text-white cursor-pointer" />
          </div>
          <FaHeart className="hover:text-red-500 cursor-pointer" />
          <FaShoppingCart className="text-green-500 cursor-pointer" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;