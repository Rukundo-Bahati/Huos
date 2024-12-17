import React from 'react';
import icn from '../assets/icn.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#100E0E] p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Stay Updated Section */}
        <div className="flex flex-col max-w-md">
          <h2 className="text-2xl font-bold mb-3">Stay Updated with Hous</h2>
          <p className="mb-3 text-slate-400">
            Stay ahead of the curve when it comes to property management.
          </p>
          <p className="text-lg mb-5">
            Subscribe to our Hous Newsletter and get the latest news, updates, and insights directly in your inbox.
          </p>
          <div className="flex gap-2 items-center">
            <input 
              type="email" 
              className="flex-1 bg-transparent border border-white px-4 py-2 rounded-full text-white placeholder-gray-400 focus:outline-none" 
              placeholder="Type Your Email Here" 
            />
            <button className="bg-[#4DCFBB] px-4 py-2 rounded-full hover:opacity-90 transition">
              <img src={icn} alt="Subscribe" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Links & Info Section */}
        <div className="flex flex-col items-start">
          {/* Navigation Links */}
          <nav className="hidden md:flex gap-6 text-lg mb-5">
            <a href="#features" className="hover:text-gray-300 transition">Features</a>
            <a href="#about" className="hover:text-gray-300 transition">About Us</a>
            <a href="#solutions" className="hover:text-gray-300 transition">Solutions</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact Us</a>
          </nav>

          {/* Logo and Tagline */}
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Hous Logo" className="w-10 h-10" />
            <p className="text-2xl font-bold">Hous</p>
          </div>
          <p className="text-lg font-light mb-2">Simplifying Property Management.</p>
          <p className="text-lg font-light">+91 (878) 921-7610</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
