// src/pages/Home.jsx
import React from "react";
import HeroBanner from "../src/Components/HeroBanner";
import ProductCard from "../src/Components/ProductCard";
import YouTubeShorts from "../src/Components/YoutubeShorts";
import HeroSlideshow from "../src/Components/HeroSlideshow";
import Testimonials from "./Components/Testimonials";
import RecentOrders from "./Components/RecentOrders";
import About from "./Components/About";
import Footer from "./Components/Footer";
// Import product images
import product1 from "./assets/product1.avif";
import product2 from "./assets/product2.avif";
import product3 from "./assets/product3.avif";
import product4 from "./assets/product4.avif";
import product5 from "./assets/product5.avif";
import product6 from "./assets/product6.avif";

// Map products
const products = [
  { id: 1, name: "BTS Tote Bag", image: product1 },
  { id: 2, name: "TV Show T-Shirt", image: product2 },
  { id: 3, name: "Custom Tote Bag", image: product3 },
  { id: 4, name: "Polaroids Mini Photo Prints", image: product4 },
  { id: 5, name: "Custom PhotoFrame For Gifting", image: product5 },
  { id: 6, name: "Custom Tshirts", image: product6 }
];

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HeroSlideshow />


<section className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((p) => (
    <ProductCard key={p.id} {...p} />
  ))}
</section>




      {/* YouTube Shorts */}
      <YouTubeShorts videoId="YOUR_SHORTS_ID" />
      <Testimonials/>
      <RecentOrders />
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
