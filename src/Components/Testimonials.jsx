// src/Components/Testimonials.jsx
import React from "react";

// Example testimonial data
const testimonials = [
  {
    id: 1,
    name: "Aarav S.",
    review: "Loved the BTS tote bag! The quality is amazing and the print is perfect.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya R.",
    review: "The custom t-shirt I ordered came out exactly as I imagined. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Karan P.",
    review: "Fast shipping and excellent customer service. The photo frame looks premium!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha M.",
    review: "Absolutely love my custom tote bag. It’s stylish and durable!",
    rating: 5,
  },
  {
    id: 5,
    name: "Rohan K.",
    review: "Great experience ordering a personalized photo frame. Very happy!",
    rating: 4,
  },
  {
    id: 6,
    name: "Ananya T.",
    review: "The t-shirt print quality is excellent, and delivery was quick!",
    rating: 5,
  }
];

const TestimonialCard = ({ name, review, rating }) => (
  <div className="flex-shrink-0 w-80 sm:w-96 md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-lg p-6 m-2 hover:scale-105 transition-transform duration-300">
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 mb-1">{name}</h4>
      <div className="flex">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
      </div>
    </div>
    <p className="text-gray-600 text-sm">{review}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        What Our Customers Say
      </h2>

      <div className="flex overflow-x-auto scrollbar-hide px-4 md:flex-wrap md:justify-center">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
