import React, { useEffect, useState } from "react";
import API from "../services/api";

const MyPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await API.get("/plans");
      setPlans(res.data);
    } catch (err) {
      console.log("Error loading plans:", err);
    }
  };

  const deletePlan = async (id) => {
    try {
      await API.delete(`/plans/${id}`);
      setPlans((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  // 🔥 SAFE AI PARSER (FIXES ALL ERRORS)
  const parseDays = (days) => {
    if (!days) return [];

    try {
      let data = days;

      // if string → JSON parse
      if (typeof data === "string") {
        data = JSON.parse(data);
      }

      // if AI returns { days: [...] }
      if (data?.days) {
        data = data.days;
      }

      // if object → convert to array
      if (!Array.isArray(data) && typeof data === "object") {
        data = Object.values(data);
      }

      if (!Array.isArray(data)) return [];

      return data;
    } catch (err) {
      console.log("Parse error:", err);
      return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        My Travel Plans
      </h1>

      <div className="max-w-5xl mx-auto space-y-10">
        {plans.length === 0 && (
          <p className="text-center text-gray-500">No plans found</p>
        )}

        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white rounded-3xl shadow-xl p-8 border"
          >
            {/* TITLE */}
            <h2 className="text-3xl font-bold text-gray-800">
              {plan.destination}
            </h2>

            <p className="text-gray-500 mb-6">
              Created: {new Date(plan.createdAt).toLocaleString()}
            </p>

            {/* DAYS */}
            <div className="space-y-4">
              {parseDays(plan.days).length > 0 ? (
                parseDays(plan.days).map((day, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-2xl border"
                  >
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      Day {day.day || index + 1}
                    </h3>

                    <p className="text-gray-700">
                      <b>Place:</b> {day.place || "N/A"}
                    </p>

                    <p className="text-gray-700">
                      <b>Weather:</b> {day.weather || "N/A"}
                    </p>

                    <p className="text-gray-700">
                      <b>Cost:</b> ${day.budget || 0}
                    </p>

                    <p className="text-gray-700">
                      <b>Activity:</b> {day.activities?.[0]?.title || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No itinerary data found</p>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => deletePlan(plan._id)}
                className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold"
              >
                Delete Plan
              </button>

              <button
                onClick={() => window.print()}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Print / PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlans;
