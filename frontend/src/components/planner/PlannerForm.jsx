import React, { useState } from "react";

const PlannerForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("AI Planner Coming Soon 🚀");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">
        AI Travel Planner
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          className="p-4 rounded-xl border outline-none"
          onChange={handleChange}
        />

        <input
          type="number"
          name="days"
          placeholder="Travel Days"
          className="p-4 rounded-xl border outline-none"
          onChange={handleChange}
        />

        <input
          type="number"
          name="budget"
          placeholder="Budget ($)"
          className="p-4 rounded-xl border outline-none"
          onChange={handleChange}
        />

        <input
          type="text"
          name="interests"
          placeholder="Interests (Beach, Hiking...)"
          className="p-4 rounded-xl border outline-none"
          onChange={handleChange}
        />

        <button className="md:col-span-2 bg-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-blue-700 duration-300">
          Generate AI Plan
        </button>
      </form>
    </div>
  );
};

export default PlannerForm;
