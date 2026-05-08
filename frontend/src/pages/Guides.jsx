import React from "react";
import { Star, Languages } from "lucide-react";
import { useState } from "react";
import BookingModal from "../components/common/BookingModal";

const guides = [
  {
    name: "Kasun Perera",
    languages: "English, Sinhala",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nadeesha Silva",
    languages: "English, Tamil",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Guides = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Tour Guides
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <img
              src={guide.image}
              alt={guide.name}
              className="w-40 h-40 rounded-full mx-auto object-cover mb-6"
            />

            <h2 className="text-3xl font-bold mb-3">{guide.name}</h2>

            <div className="flex justify-center items-center gap-2 text-gray-600 mb-3">
              <Languages size={20} />
              <span>{guide.languages}</span>
            </div>

            <div className="flex justify-center items-center gap-1 text-yellow-500 mb-6">
              <Star fill="gold" size={18} />
              <span>{guide.rating}</span>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
            >
              Hire Guide
            </button>
          </div>
        ))}
      </div>
      <BookingModal
        title="Hire Tour Guide"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Guides;
