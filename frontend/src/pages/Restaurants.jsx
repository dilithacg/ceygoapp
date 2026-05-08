import React from "react";
import { Star, MapPin } from "lucide-react";
import { useState } from "react";
import BookingModal from "../components/common/BookingModal";

const restaurants = [
  {
    name: "Ministry of Crab",
    location: "Colombo",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    cuisine: "Seafood",
  },
  {
    name: "The Lagoon",
    location: "Negombo",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    cuisine: "Sri Lankan",
  },
];

const Restaurants = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Restaurants
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold">{restaurant.name}</h2>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star fill="gold" size={18} />
                  <span>{restaurant.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <MapPin size={18} />
                <span>{restaurant.location}</span>
              </div>

              <p className="text-gray-600 mb-6">
                Cuisine: {restaurant.cuisine}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Reserve Table
              </button>
            </div>
          </div>
        ))}
      </div>
      <BookingModal
        title="Restaurant Reservation"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Restaurants;
