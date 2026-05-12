import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Star, MapPin } from "lucide-react";
import GuideBookingModal from "../components/common/GuideBookingModal";

const Guides = () => {
  const [guides, setGuides] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    const fetchGuides = async () => {
      const res = await API.get("/guides");
      setGuides(res.data);
    };

    fetchGuides();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Tour Guides
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {guides.map((g) => (
          <div
            key={g._id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <img src={g.image} className="h-64 w-full object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{g.name}</h2>

              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <MapPin size={16} />
                {g.location}
              </div>

              <div className="flex items-center gap-2 text-yellow-500 mt-2">
                <Star size={16} fill="gold" />
                {g.rating}
              </div>

              <p className="text-gray-600 mt-3">{g.experience} experience</p>

              <p className="font-bold text-blue-600 mt-3">
                ${g.pricePerDay}/day
              </p>

              <button
                onClick={() => {
                  setSelectedGuide(g);
                  setOpen(true);
                }}
                className="mt-5 bg-blue-600 text-white w-full py-2 rounded-xl font-bold"
              >
                Hire Guide
              </button>
            </div>
          </div>
        ))}
      </div>
      <GuideBookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        guide={selectedGuide}
      />
    </div>
  );
};

export default Guides;
