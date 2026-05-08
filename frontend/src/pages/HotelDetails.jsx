import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import API from "../services/api";
import BookingModal from "../components/common/BookingModal";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await API.get(`/hotels/${id}`);
        setHotel(res.data);
      } catch (error) {
        console.log("Error loading hotel:", error);
      }
    };

    fetchHotel();
  }, [id]);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <img
          src={hotel.image}
          className="h-[400px] w-full object-cover"
          alt={hotel.name}
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{hotel.name}</h1>

          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <MapPin size={18} />
            <span>{hotel.location}</span>
          </div>

          <p className="text-gray-600 mb-6">{hotel.description}</p>

          <div className="flex items-center gap-2 mb-8">
            <Star fill="gold" className="text-yellow-500" />
            <span>4.8 Rating</span>
          </div>

          <button
            onClick={() => {
              setSelectedHotelId(hotel._id);
              setOpen(true);
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
          >
            Book This Hotel
          </button>
        </div>
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

export default HotelDetails;
