import React, { useEffect, useState } from "react";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import API from "../services/api";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/destinations");
        setDestinations(res.data);
      } catch (error) {
        console.log("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
          Explore Destinations
        </h1>

        {/* LOADING STATE */}
        {loading && (
          <p className="text-center text-gray-500">Loading destinations...</p>
        )}

        {/* EMPTY STATE */}
        {!loading && destinations.length === 0 && (
          <p className="text-center text-gray-500">
            No destinations found. Add from Admin.
          </p>
        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((place) => (
            <div
              key={place._id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
            >
              {/* IMAGE */}
              <img
                src={place.image}
                alt={place.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                {/* NAME + RATING */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{place.name}</h2>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="gold" />
                    <span>{place.rating}</span>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <MapPin size={18} />
                  <span>{place.location}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {place.description}
                </p>

                {/* BUTTON */}
                <Link
                  to={`/destinations/${place._id}`}
                  className="block text-center w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
