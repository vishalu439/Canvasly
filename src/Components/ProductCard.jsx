import React from "react";

const ProductCard = ({ image, name }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
      />
      
      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent opacity-100 transition-opacity duration-500"></div>
      
      {/* Text & Button */}
      <div className="absolute bottom-4 w-full px-4 flex flex-col items-center">
        <h3 className="text-white font-semibold text-lg sm:text-xl drop-shadow-sm mb-2 text-center">
          {name}
        </h3>
        <a
          href={`https://wa.me/917619538167?text=Hi, I want to order ${encodeURIComponent(name)}`}
          target="_blank"
          className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          💖 Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
