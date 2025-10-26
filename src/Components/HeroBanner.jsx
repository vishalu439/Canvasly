import React, { useState, useEffect } from "react";

const HeroBanner = () => {
 
  const messages = [
    "Custom Gifts, Crafted with Care",
    "Corporate Gifting Made Easy 🎁",
    "Bulk Orders Across India 🇮🇳",
    "Free Shipping on All Orders 🚚",
    "Your Brand, Your Design 💼",
    `3,06,378 pcs sold last month 👕`
  ];

  const [index, setIndex] = useState(0);

  // 🔹 Auto-rotate text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // change text every 3 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section
      className="py-6 text-center"
      style={{ backgroundColor: "#103948" }}
    >
      <h1
        key={index}
        className="text-2xl sm:text-3xl font-bold tracking-wide 
        bg-gradient-to-r from-teal-200 via-white to-teal-200 
        bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)] 
        transition-opacity duration-700 ease-in-out opacity-100 animate-fade"
      >
        {messages[index]}
      </h1>

      {/* fade animation */}
      <style>{`
        @keyframes fade {
          0%, 100% { opacity: 0; transform: translateY(5px); }
          50% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
