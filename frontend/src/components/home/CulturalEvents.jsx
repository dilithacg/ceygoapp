import React from "react";

const CulturalEvents = () => {
  const events = [
    "Kandy Esala Perahera",
    "Sinhala & Tamil New Year",
    "Vesak Festival",
  ];

  return (
    <div className="py-20 bg-blue-600 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Cultural Events</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
          >
            <h3 className="text-2xl font-bold">{event}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalEvents;
