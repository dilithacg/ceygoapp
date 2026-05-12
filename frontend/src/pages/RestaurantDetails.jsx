import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { Star, MapPin, Utensils } from "lucide-react";
import BookingModal from "../components/common/BookingModal";

const RestaurantDetails = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [open, setOpen] = useState(false);

  // ---------------- FETCH SINGLE RESTAURANT ----------------
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await API.get(`/restaurants/${id}`);
        setRestaurant(res.data);
      } catch (error) {
        console.log("Error loading restaurant:", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading Restaurant...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO IMAGE */}
      <div className="h-[450px] relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            {restaurant.name}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          {/* TOP INFO */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="text-red-500" />
              <span className="text-xl">{restaurant.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" fill="gold" />
              <span className="text-xl">{restaurant.rating}</span>
            </div>

            <div className="flex items-center gap-2">
              <Utensils className="text-blue-500" />
              <span className="text-xl">{restaurant.cuisine}</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-700 leading-8 mb-10">
            {restaurant.description || "No description available."}
          </p>

          {/* PRICE RANGE */}
          {restaurant.priceRange && (
            <p className="text-lg font-semibold mb-8">
              Price Range:{" "}
              <span className="text-blue-600">{restaurant.priceRange}</span>
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700"
          >
            Reserve Table
          </button>
        </div>
      </div>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Restaurant Reservation"
        restaurant={restaurant}
      />
    </div>
  );
};

export default RestaurantDetails;
