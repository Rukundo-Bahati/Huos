import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white p-4 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <p className="text-2xl font-bold">Hous</p>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="hidden md:flex gap-6 text-lg">
        <a href="#features" className="hover:text-gray-300">Features</a>
        <a href="#about" className="hover:text-gray-300">About Us</a>
        <a href="#solutions" className="hover:text-gray-300">Solutions</a>
        <a href="#contact" className="hover:text-gray-300">Contact Us</a>
      </div>

      {/* Right Section: Login Button */}
      <button className=" hover:bg-white hover:text-black text-white px-5 py-2 rounded-full shadow-md border border-white duration-300">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
