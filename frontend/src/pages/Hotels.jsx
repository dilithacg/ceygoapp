import React, { useEffect, useState } from "react";
import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import BookingModal from "../components/common/BookingModal";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await API.get("/hotels");
        setHotels(res.data);
      } catch (error) {
        console.log("Error loading hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Hotels
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            onClick={() => navigate(`/hotels/${hotel._id}`)}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-3xl font-bold">{hotel.name}</h2>
              </div>

              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <MapPin size={18} />
                <span>{hotel.location}</span>
              </div>

              <button
                onClick={() => {
                  setSelectedHotelId(hotel._id);
                  setOpen(true);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <BookingModal
        title="Hotel Booking"
        isOpen={open}
        onClose={() => setOpen(false)}
        hotelId={selectedHotelId}
      />
    </div>
  );
};

export default Hotels;
