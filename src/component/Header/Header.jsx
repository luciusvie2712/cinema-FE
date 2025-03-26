
import '../Header/Header.scss'
import React from "react";
import "./Header.scss"

function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text ">MOVIE</div>

      {/* Menu */}
      <nav>
        <ul className="flex space-x-6">
          <li className="hover:text-red-500 cursor-pointer">Login</li>
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
          <li className="hover:text-red-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 rounded-l-md border border-gray-300 text-black focus:outline-none"
        />
        <button className="bg-red-600 px-4 py-1 text-white rounded-r-md hover:bg-red-700">
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
