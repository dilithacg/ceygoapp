import React, { useState } from "react";
import { generateTravelPlan } from "../../services/geminiApi";

const PlannerForm = ({ setResult }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await generateTravelPlan(formData);
      setResult(result);
    } catch (err) {
      console.log(err);
      alert("AI failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">
        AI Travel Planner
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <input
          name="destination"
          placeholder="Destination"
          className="p-4 border rounded-xl"
          onChange={handleChange}
        />

        <input
          name="days"
          type="number"
          placeholder="Days"
          className="p-4 border rounded-xl"
          onChange={handleChange}
        />

        <input
          name="budget"
          type="number"
          placeholder="Budget"
          className="p-4 border rounded-xl"
          onChange={handleChange}
        />

        <input
          name="interests"
          placeholder="Interests"
          className="p-4 border rounded-xl"
          onChange={handleChange}
        />

        <button
          className="md:col-span-2 bg-blue-600 text-white py-4 rounded-xl font-bold"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate AI Plan"}
        </button>
      </form>
    </div>
  );
};

export default PlannerForm;
