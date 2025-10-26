import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
      />

      {/* Slight dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-10 transition-opacity duration-500"></div>

      {/* Text & Button */}
      <div className="absolute bottom-4 w-full px-4 flex flex-col items-center">
        <h3 className="text-white font-semibold text-lg sm:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-1 text-center">
          {name}
        </h3>

        {/* Price */}
        <p className="text-white font-semibold text-base sm:text-lg mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-md">
          ₹{price}
        </p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/917619538167?text=Hi, I want to order ${encodeURIComponent(
            name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          💖 Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
