import React, { useEffect, useState } from "react";
import API from "../../services/api";

const PopularDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/destinations");

        // filter rating >= 4.5
        const popular = res.data.filter((item) => Number(item.rating) >= 4.5);

        setDestinations(popular);
      } catch (error) {
        console.log("Error loading destinations:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-20 px-6 bg-white">
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-14">
        Popular Destinations
      </h2>

      {/* EMPTY STATE */}
      {destinations.length === 0 && (
        <p className="text-center text-gray-500">
          No popular destinations found
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {destinations.map((place) => (
          <div
            key={place._id}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300 bg-white"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">{place.name}</h3>

              <p className="text-gray-600">⭐ {place.rating}</p>

              <p className="text-sm text-gray-500">{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
