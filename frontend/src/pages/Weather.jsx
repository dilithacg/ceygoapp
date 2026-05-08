import React from "react";
import { CloudSun, CloudRain, Sun, Wind } from "lucide-react";

const weatherData = [
  {
    city: "Colombo",
    temp: "30°C",
    condition: "Sunny",
    icon: <Sun size={40} />,
  },
  {
    city: "Ella",
    temp: "22°C",
    condition: "Cloudy",
    icon: <CloudSun size={40} />,
  },
  {
    city: "Kandy",
    temp: "25°C",
    condition: "Rainy",
    icon: <CloudRain size={40} />,
  },
  {
    city: "Galle",
    temp: "28°C",
    condition: "Windy",
    icon: <Wind size={40} />,
  },
];

const Weather = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-blue-600">
          Sri Lanka Weather
        </h1>

        <div className="grid md:grid-cols-4 gap-8">
          {weatherData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-5">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold mb-2">{item.city}</h2>

              <p className="text-4xl font-bold text-gray-800 mb-3">
                {item.temp}
              </p>

              <p className="text-gray-600 text-lg">{item.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
