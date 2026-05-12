import React, { useEffect, useState } from "react";
import API from "../../services/api";

const CulturalEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get("/events");
        setEvents(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="py-20 bg-blue-600 text-white px-6">
      <h2 className="text-5xl font-bold text-center mb-14">Cultural Events</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>

              <p className="mb-2">📍 {event.location}</p>

              <p className="mb-4">📅 {event.date}</p>

              <p className="text-white/80">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalEvents;
