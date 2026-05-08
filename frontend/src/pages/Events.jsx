import React from "react";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    name: "Kandy Esala Perahera",
    location: "Kandy",
    date: "August 2026",
    image:
      "https://ik.imagekit.io/TBR/Island%20Events/Kandy%20Esala%20Perahera%20(Festival%20of%20the%20Tooth)%20Sri%20lanka.webp",
    description:
      "One of Sri Lanka’s grandest cultural festivals with traditional dancers and elephants.",
  },
  {
    name: "Vesak Festival",
    location: "Colombo",
    date: "May 2026",
    image:
      "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_c3fc88d5fc.jpg",
    description:
      "Celebration of Lord Buddha’s birth, enlightenment, and passing away.",
  },
  {
    name: "Sinhala & Tamil New Year",
    location: "Islandwide",
    date: "April 2026",
    image:
      "https://blog.cinnamonhotels.com/wp-content/uploads/2021/04/milk-rice.jpg",
    description:
      "Traditional Sri Lankan New Year celebrations with games and cultural food.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
          Cultural Events
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
            >
              <img
                src={event.image}
                alt={event.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{event.name}</h2>

                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 mb-5">
                  <CalendarDays size={18} />
                  <span>{event.date}</span>
                </div>

                <p className="text-gray-600 mb-6">{event.description}</p>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
