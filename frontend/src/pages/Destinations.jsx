import React from "react";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Ella",
    location: "Badulla",
    rating: 4.8,
    image:
      "https://feelfreetravel.com/blog/wp-content/uploads/2024/02/Hero-9-arches-bridge-2048x1300-1.jpg",
    description:
      "Beautiful mountain views, tea plantations, and hiking adventures.",
  },
  {
    name: "Sigiriya",
    location: "Matale",
    rating: 4.9,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg?w=900&h=500&s=1",
    description:
      "Ancient rock fortress and one of Sri Lanka’s most iconic landmarks.",
  },
  {
    name: "Mirissa",
    location: "Southern Province",
    rating: 4.7,
    image:
      "https://www.theglobetrottergp.com/wp-content/uploads/2019/05/oDZ1LpuSxCdJQd5UhbjSA_thumb_60bb.jpg",
    description: "Golden beaches, whale watching, and tropical relaxation.",
  },
  {
    name: "Kandy",
    location: "Central Province",
    rating: 4.6,
    image:
      "https://faw-marketing.transforms.svdcdn.com/production/images/Temple-of-the-Tooth-in-Kandy.jpg?w=2600&h=1722&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.507&fp-y=0.4316&dm=1541511868&s=6f4458b5bfafc1e9a8e70d82f85379a7",
    description:
      "Cultural capital with temples, lakes, and rich Sri Lankan heritage.",
  },
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
          Explore Destinations
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{place.name}</h2>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="gold" />
                    <span>{place.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <MapPin size={18} />
                  <span>{place.location}</span>
                </div>

                <p className="text-gray-600 mb-6">{place.description}</p>

                <Link
                  to={`/destinations/${place.name.toLowerCase()}`}
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
