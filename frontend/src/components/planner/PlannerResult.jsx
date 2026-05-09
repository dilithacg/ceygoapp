import React from "react";
import API from "../../services/api";

const PlannerResult = ({ result }) => {
  if (!result) return null;

  const savePlan = async () => {
    try {
      await API.post("/plans", {
        destination: result.destination,
        days: result,
      });

      alert("Plan Saved ❤️");
    } catch (err) {
      console.log(err);
    }
  };

  const normalizePlan = (data) => {
    if (!data) return [];

    // if string → try JSON
    if (typeof data === "string") {
      try {
        return JSON.parse(data);
      } catch {
        return [];
      }
    }

    // if object but not array
    if (typeof data === "object" && !Array.isArray(data)) {
      // Gemini sometimes returns {days: {...}}
      if (data.days) return normalizePlan(data.days);

      return Object.values(data);
    }

    // if array
    if (Array.isArray(data)) return data;

    return [];
  };

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Your AI Travel Plan ✈️
      </h2>

      {result.days.map((day, index) => (
        <div key={index} className="bg-white shadow-xl rounded-3xl p-6 mb-8">
          <button
            onClick={savePlan}
            className="bg-green-600 text-white px-6 py-3 rounded-xl mt-6"
          >
            Save Plan ❤️
          </button>
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">
              Day {day.day} - {day.place}
            </h3>

            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
              {day.weather}
            </span>
          </div>

          {/* ACTIVITIES */}
          <div className="space-y-4">
            {day.activities.map((act, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">{act.title}</h4>
                  <span className="text-green-600 font-bold">{act.cost}</span>
                </div>

                <p className="text-gray-600 text-sm">{act.time}</p>
                <p className="text-gray-700">{act.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlannerResult;
