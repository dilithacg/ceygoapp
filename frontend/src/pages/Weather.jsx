import React, { useState } from "react";
import { CloudSun, CloudRain, Sun, Wind } from "lucide-react";
import { getWeather } from "../services/weatherApi";

const Weather = () => {
  const [city, setCity] = useState("Colombo");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setError("");
      const res = await getWeather(city);
      setWeather(res.data);
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data?.message || "City not found");
      setWeather(null);
    }
  };

  const getIcon = (main) => {
    switch (main) {
      case "Clear":
        return <Sun size={40} className="text-yellow-500" />;
      case "Rain":
        return <CloudRain size={40} className="text-blue-500" />;
      case "Clouds":
        return <CloudSun size={40} className="text-gray-500" />;
      default:
        return <Wind size={40} className="text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-10">
          Live Weather 🌦️
        </h1>

        {/* INPUT */}
        <div className="flex gap-3 justify-center mb-10">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 border rounded-xl w-60"
            placeholder="Enter city"
          />

          <button
            onClick={fetchWeather}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Search
          </button>
        </div>

        {/* ERROR */}
        {error && <p className="text-red-500 mb-6">{error}</p>}

        {/* RESULT CARD */}
        {weather && (
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex justify-center mb-5">
              {getIcon(weather.weather[0].main)}
            </div>

            <h2 className="text-4xl font-bold mb-2">{weather.name}</h2>

            <p className="text-gray-500 text-xl mb-4">
              {weather.weather[0].main}
            </p>

            <h1 className="text-6xl font-bold text-blue-600 mb-4">
              {Math.round(weather.main.temp)}°C
            </h1>

            <div className="flex justify-center gap-8 text-gray-600">
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
