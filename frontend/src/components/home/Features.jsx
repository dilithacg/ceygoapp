import React from "react";
import { Map, CloudSun, Wallet, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sparkles size={40} />,
      title: "AI Itinerary",
      desc: "Generate smart travel plans instantly.",
    },
    {
      icon: <CloudSun size={40} />,
      title: "Weather Updates",
      desc: "Real-time weather forecasting.",
    },
    {
      icon: <Map size={40} />,
      title: "Route Planning",
      desc: "Interactive Google Maps integration.",
    },
    {
      icon: <Wallet size={40} />,
      title: "Budget Planner",
      desc: "Plan trips within your budget.",
    },
  ];

  return (
    <div className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-16">
        Smart Travel Features
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300"
          >
            <div className="flex justify-center text-blue-600 mb-4">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
