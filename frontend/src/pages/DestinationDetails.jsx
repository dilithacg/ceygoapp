import React, { useEffect, useState } from "react";
import { MapPin, Star, CloudSun } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH FROM BACKEND
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await API.get("/destinations");

        // find by ID OR name
        const found = res.data.find(
          (item) =>
            item._id === id || item.name.toLowerCase() === id.toLowerCase(),
        );

        setPlace(found);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  const saveDestination = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    saved.push(place);
    localStorage.setItem("favorites", JSON.stringify(saved));

    alert("Destination Saved ❤️");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center text-5xl font-bold">
        Destination Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO */}
      <div className="h-[500px] relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-7xl font-extrabold text-white">{place.name}</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          {/* INFO */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="text-red-500" />
              <span className="text-xl">{place.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" fill="gold" />
              <span className="text-xl">{place.rating}</span>
            </div>
          </div>

          <p className="text-xl leading-9 text-gray-700">{place.description}</p>

          {/* BUTTONS */}
          <div className="mt-12 flex gap-5">
            <button
              onClick={() => navigate("/planner")}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold"
            >
              Plan Trip
            </button>

            <button
              onClick={saveDestination}
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold"
            >
              Save Destination
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
