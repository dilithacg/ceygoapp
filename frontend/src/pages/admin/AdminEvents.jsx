import React, { useEffect, useState } from "react";
import API from "../../services/api";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Delete Event?")) return;

    await API.delete(`/events/${id}`);

    setEvents((prev) => prev.filter((e) => e._id !== id));
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-blue-600">Manage Events</h2>

      <div className="grid gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-80 h-72 object-cover"
              />

              <div className="p-8 flex-1">
                <h3 className="text-3xl font-bold mb-4">{event.title}</h3>

                <p className="text-gray-500 mb-3">📍 {event.location}</p>

                <p className="text-gray-500 mb-5">📅 {event.date}</p>

                <p className="text-gray-700 leading-8">{event.description}</p>

                <button
                  onClick={() => deleteEvent(event._id)}
                  className="mt-8 bg-red-500 text-white px-6 py-3 rounded-2xl font-bold"
                >
                  Delete Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEvents;
