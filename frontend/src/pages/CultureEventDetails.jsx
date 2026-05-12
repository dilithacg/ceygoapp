import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import API from "../services/api";

const CultureEventDetails = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await API.get(`/events/${id}`);
      setEvent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO IMAGE */}
      <div className="h-[500px] relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white text-center px-6">
            {event.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          {/* INFO */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="text-red-500" />
              <span className="text-xl">{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="text-blue-500" />
              <span className="text-xl">{event.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="text-green-500" />
              <span className="text-xl">{event.category}</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-5 text-blue-600">
              About Event
            </h2>

            <p className="text-gray-700 text-xl leading-9">
              {event.description}
            </p>
          </div>

          {/* EXTRA SECTION */}
          <div className="bg-blue-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Visitor Experience
            </h3>

            <p className="text-gray-700 leading-8 text-lg">
              Enjoy Sri Lankan traditions, local food, music, dancing, and
              unforgettable cultural performances during this special event.
              Travelers can experience authentic local celebrations and capture
              amazing memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureEventDetails;
