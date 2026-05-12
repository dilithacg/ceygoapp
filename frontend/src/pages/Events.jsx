import React, { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import API from "../services/api";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
          Cultural Events
        </h1>

        {events.length === 0 ? (
          <div className="text-center text-gray-500 text-xl">
            No Events Available
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mb-5">
                    <CalendarDays size={18} />
                    <span>{event.date}</span>
                  </div>

                  <p className="text-gray-600 mb-6">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
                      {event.category}
                    </span>

                    <Link
                      to={`/events/${event._id}`}
                      className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
