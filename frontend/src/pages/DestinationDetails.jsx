import React from "react";
import { MapPin, Star, CloudSun } from "lucide-react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const data = {
  ella: {
    name: "Ella",
    image:
      "https://feelfreetravel.com/blog/wp-content/uploads/2024/02/Hero-9-arches-bridge-2048x1300-1.jpg",
    description:
      "Ella is one of Sri Lanka’s most beautiful mountain destinations with tea plantations, waterfalls, and hiking adventures.",
    location: "Badulla",
    rating: 4.8,
    weather: "22°C Cloudy",
  },

  sigiriya: {
    name: "Sigiriya",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg?w=900&h=500&s=1",
    description:
      "Sigiriya is an ancient rock fortress and UNESCO World Heritage site.",
    location: "Matale",
    rating: 4.9,
    weather: "30°C Sunny",
  },
  mirissa: {
    name: "Mirissa",
    image:
      "https://www.theglobetrottergp.com/wp-content/uploads/2019/05/oDZ1LpuSxCdJQd5UhbjSA_thumb_60bb.jpg",
    description:
      "Mirissa is a popular coastal town known for its beautiful beaches, whale watching, and vibrant nightlife.",
    location: "Matara",
    rating: 4.7,
    weather: "29°C Tropical",
  },

  kandy: {
    name: "Kandy",
    image:
      "https://faw-marketing.transforms.svdcdn.com/production/images/Temple-of-the-Tooth-in-Kandy.jpg?w=2600&h=1722&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.507&fp-y=0.4316&dm=1541511868&s=6f4458b5bfafc1e9a8e70d82f85379a7",
    description:
      "Kandy is a major city in the hills, home to the sacred Temple of the Tooth Relic and rich Sinhalese culture.",
    location: "Kandy District",
    rating: 4.8,
    weather: "24°C Partly Cloudy",
  },
};

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = data[id];

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center text-5xl font-bold">
        Destination Not Found
      </div>
    );
  }
  const saveDestination = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    saved.push(place);

    localStorage.setItem("favorites", JSON.stringify(saved));

    alert("Destination Saved ❤️");
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Image */}
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

      {/* Content */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="text-red-500" />
              <span className="text-xl">{place.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" fill="gold" />
              <span className="text-xl">{place.rating}</span>
            </div>

            <div className="flex items-center gap-2">
              <CloudSun className="text-blue-500" />
              <span className="text-xl">{place.weather}</span>
            </div>
          </div>

          <p className="text-xl leading-9 text-gray-700">{place.description}</p>

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
