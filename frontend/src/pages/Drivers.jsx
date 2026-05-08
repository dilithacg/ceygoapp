import React from "react";
import { Car, Star } from "lucide-react";
import { useState } from "react";
import BookingModal from "../components/common/BookingModal";

const drivers = [
  {
    name: "Saman Kumara",
    vehicle: "Toyota Prius",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Ruwan Fernando",
    vehicle: "KDH Van",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Drivers = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Drivers
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {drivers.map((driver, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <img
              src={driver.image}
              alt={driver.name}
              className="w-40 h-40 rounded-full mx-auto object-cover mb-6"
            />

            <h2 className="text-3xl font-bold mb-3">{driver.name}</h2>

            <div className="flex justify-center items-center gap-2 text-gray-600 mb-3">
              <Car size={20} />
              <span>{driver.vehicle}</span>
            </div>

            <div className="flex justify-center items-center gap-1 text-yellow-500 mb-6">
              <Star fill="gold" size={18} />
              <span>{driver.rating}</span>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
            >
              Book Driver
            </button>
          </div>
        ))}
      </div>
      <BookingModal
        title="Driver Booking"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Drivers;
