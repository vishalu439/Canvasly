import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tshirt1 from "../assets/tshirt1.avif";
import totebag1 from "../assets/totebag1.avif";
// import frame1 from "../assets/frame1.jpg";

// Mobile images
import slide1 from "../assets/mobile/1.avif";
import slide2 from "../assets/mobile/2.avif";
import slide3 from "../assets/mobile/3.avif";
import slide4 from "../assets/mobile/4.avif";
import slide5 from "../assets/mobile/5.avif";
import slide6 from "../assets/mobile/6.avif";

// Desktop slides
const desktopSlides = [
  {
    id: 1,
    image: tshirt1,
    caption: "Custom Printed T-Shirts 👕",
    bgPosition: "center 10%",
  },
  {
    id: 2,
    image: totebag1,
    caption: "Trendy Tote Bags 👜",
    bgPosition: "center 40%",
  }
];

// Mobile slides (order 1 → 6)
const mobileSlides = [
  { id: 1, image: slide1, caption: "Custom Printed T-Shirts 👕", bgPosition: "center 10%" },
  { id: 2, image: slide2, caption: "Trendy Tote Bags 👜", bgPosition: "center 40%" },
  { id: 3, image: slide3, caption: "Custom Printed T-Shirts 👕", bgPosition: "center 10%" },
  { id: 4, image: slide4, caption: "Custom Printed T-Shirts 👕", bgPosition: "center 10%" },
  { id: 5, image: slide5, caption: "Custom Printed T-Shirts 👕", bgPosition: "center 30%" },
  { id: 6, image: slide6, caption: "Trendy Tote Bags 👜", bgPosition: "center center" },
];

const HeroSlideshow = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <section className="relative w-full h-[65vh] sm:h-[85vh] bg-gray-50 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full flex flex-col items-center justify-center text-white relative"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image}) ${slide.bgPosition} / cover no-repeat`,
              }}
            >
              <div className="text-center px-4 animate-fadeIn">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg leading-tight">
                  {slide.caption}
                </h2>
                <button
                  onClick={() => window.open("https://wa.me/7619538167", "_blank")}
                  className="bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
                >
                  Order on WhatsApp 💬
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlideshow;
