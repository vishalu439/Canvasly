import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-pink-500">Canvasly</span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          At <span className="font-semibold text-pink-500">Canvasly</span>, we turn your
          favorite moments and ideas into beautifully printed creations. From
          <span className="font-medium"> custom T-shirts</span> and
          <span className="font-medium"> tote bags</span> to
          <span className="font-medium"> personalized frames</span>, every product is made
          with care, creativity, and high-quality printing that lasts.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Whether you’re looking for a unique gift or a stylish piece for
          yourself, we help you express your personality through art and print.
          Each order is designed and customized right here in India using
          premium materials and vivid printing — because your story deserves to
          stand out.
        </p>

        <div className="mt-10">
          <button
            onClick={() => window.open("https://wa.me/7619538167", "_blank")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold transition-all"
          >
            Chat with Us 💬
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
