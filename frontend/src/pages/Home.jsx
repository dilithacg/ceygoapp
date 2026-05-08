import React from "react";
import Hero from "../components/home/SectionHero";
import Features from "../components/home/Features";
import PopularDestinations from "../components/home/PopularDestinations";
import CulturalEvents from "../components/home/CulturalEvents";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <PopularDestinations />
      <CulturalEvents />
      <Footer />
    </div>
  );
};

export default Home;
