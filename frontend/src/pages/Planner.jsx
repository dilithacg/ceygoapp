import React, { useState } from "react";
import PlannerForm from "../components/planner/PlannerForm";
import PlannerResult from "../components/planner/PlannerResult";

const Planner = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // 🔥 SAFE AI RESULT HANDLER
  const handleAIResult = (data) => {
    try {
      let cleaned = data;

      // If response is string
      if (typeof cleaned === "string") {
        // Remove ```json and ``` blocks
        cleaned = cleaned
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        cleaned = JSON.parse(cleaned);
      }

      setResult(cleaned);
      setError("");
    } catch (err) {
      console.log("JSON Parse Error:", err);
      setError("AI response format error. Please try again.");
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      {/* FORM */}
      <PlannerForm setResult={handleAIResult} />

      {/* ERROR MESSAGE */}
      {error && (
        <div className="max-w-4xl mx-auto mt-6 bg-red-50 text-red-600 p-4 rounded-xl border border-red-200">
          {error}
        </div>
      )}

      {/* RESULT */}
      <PlannerResult result={result} />
    </div>
  );
};

export default Planner;
