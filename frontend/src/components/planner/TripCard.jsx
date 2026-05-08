import React from "react";
import { MapPin, Wallet, CloudSun } from "lucide-react";

const TripCard = ({ day }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-blue-600">Day {day.day}</h2>

        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
          {day.weather}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="text-red-500" />
          <p>{day.place}</p>
        </div>

        <div className="flex items-center gap-3">
          <Wallet className="text-green-600" />
          <p>Estimated Cost: ${day.cost}</p>
        </div>

        <div className="flex items-center gap-3">
          <CloudSun className="text-yellow-500" />
          <p>{day.activity}</p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
