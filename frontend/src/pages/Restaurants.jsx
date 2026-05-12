import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Star, MapPin } from "lucide-react";
import BookingModal from "../components/common/BookingModal";
import { Link } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [open, setOpen] = useState(false);

  // ---------------- FETCH RESTAURANTS ----------------
  const fetchRestaurants = async () => {
    try {
      const res = await API.get("/restaurants");
      setRestaurants(res.data);
    } catch (error) {
      console.log("Error loading restaurants:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Restaurants
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {restaurants.length === 0 && (
          <p className="text-center text-gray-500 col-span-2">
            No restaurants found.
          </p>
        )}

        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
          >
            {/* IMAGE */}
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-72 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              {/* NAME + RATING */}
              <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold">{restaurant.name}</h2>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star fill="gold" size={18} />
                  <span>{restaurant.rating}</span>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <MapPin size={18} />
                <span>{restaurant.location}</span>
              </div>

              {/* DETAILS */}
              <p className="text-gray-600 mb-2">
                Cuisine: {restaurant.cuisine}
              </p>

              {restaurant.priceRange && (
                <p className="text-gray-600 mb-6">
                  Price: {restaurant.priceRange}
                </p>
              )}

              {/* BUTTON */}

              <Link
                to={`/restaurants/${restaurant._id}`}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold inline-block text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <BookingModal
        title="Restaurant Reservation"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Restaurants;
