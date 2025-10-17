import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-32 flex flex-col items-center gap-6">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Canvasly</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Bringing your ideas to life — one print at a time.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/canvasly.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@canvasly01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/7619538167"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Canvasly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
