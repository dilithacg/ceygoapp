import React from "react";
import TripCard from "./TripCard";

const dummyTrips = [
  {
    day: 1,
    weather: "Sunny",
    place: "Ella",
    cost: 120,
    activity: "Visit Nine Arch Bridge & Little Adam's Peak",
  },
  {
    day: 2,
    weather: "Cloudy",
    place: "Kandy",
    cost: 90,
    activity: "Temple of Tooth & Cultural Show",
  },
];

const PlannerResult = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Your AI Travel Plan
      </h2>

      {dummyTrips.map((trip, index) => (
        <TripCard key={index} day={trip} />
      ))}
    </div>
  );
};

export default PlannerResult;
