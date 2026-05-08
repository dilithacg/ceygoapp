import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SectionHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.travellankaconnection.com/images/banners/wonder_of_asia-sri_lanka__.jpg')",
        }}
      />

      {/* Dark Overlay (controls opacity look) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold leading-tight"
        >
          Explore Sri Lanka With AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-xl text-gray-100"
        >
          Smart travel planning with personalized itineraries, weather updates,
          maps, events, and budget estimation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <div className="flex gap-4">
            {/* Link to the Planner Route */}
            <Link to="/planner">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300">
                Start Planning
              </button>
            </Link>

            {/* Link to the Destinations Route */}
            <Link to="/destinations">
              <button className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 duration-300">
                Explore Destinations
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHero;
