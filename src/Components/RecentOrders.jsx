// src/Components/RecentOrders.jsx
import React, { useState, useEffect } from "react";

const recentOrders = [
  { name: "Aarav S.", product: "BTS Tote Bag", city: "Mumbai" },
  { name: "Priya R.", product: "Custom T-Shirt", city: "Delhi" },
  { name: "Karan P.", product: "Photo Frame", city: "Bangalore" },
  { name: "Sneha M.", product: "Trendy Tote Bag", city: "Pune" },
  { name: "Rohan K.", product: "Custom Tote Bag", city: "Hyderabad" },
  { name: "Ananya T.", product: "Photo Frame", city: "Chennai" },
  { name: "Vivaan L.", product: "Custom T-Shirt", city: "Kolkata" },
  { name: "Isha P.", product: "BTS Tote Bag", city: "Ahmedabad" },
  { name: "Aditya R.", product: "Trendy Tote Bag", city: "Lucknow" },
  { name: "Meera S.", product: "Photo Frame", city: "Jaipur" },
  { name: "Arjun M.", product: "Custom T-Shirt", city: "Bhopal" },
  { name: "Sanya D.", product: "BTS Tote Bag", city: "Noida" },
  { name: "Reyansh C.", product: "Photo Frame", city: "Gurgaon" },
  { name: "Anika V.", product: "Trendy Tote Bag", city: "Patna" },
  { name: "Devansh B.", product: "Custom Tote Bag", city: "Coimbatore" },
];

const RecentOrders = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const showNextNotification = () => {
      // Show notification
      setVisible(true);

      // Hide after 4s
      timeout = setTimeout(() => {
        setVisible(false);

        // Wait 1s before showing next
        timeout = setTimeout(() => {
          setCurrent((prev) => (prev + 1) % recentOrders.length);
          showNextNotification();
        }, 4000);
      }, 4000);
    };

    showNextNotification();

    return () => clearTimeout(timeout);
  }, []);

  const order = recentOrders[current];

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 
                  sm:right-6 sm:left-auto sm:translate-x-0 
                  bg-white shadow-xl rounded-xl flex items-center 
                  space-x-2 sm:space-x-3 px-4 py-3 transition-all duration-500 text-sm sm:text-base 
                  w-[95%] sm:max-w-sm
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex-1 text-gray-700">
        🎉 <span className="font-semibold">{order.name}</span> from {order.city} just ordered a{" "}
        <span className="font-semibold">{order.product}</span>!
      </div>
      <button
        onClick={() => window.open("https://wa.me/7619538167", "_blank")}
        className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-pink-600 transition"
      >
        Order Now 💬
      </button>
    </div>
  );
};

export default RecentOrders;
