import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Hotel, Car, Utensils, Ticket, Trash2 } from "lucide-react";

const Budget = () => {
  const [budget, setBudget] = useState({
    hotel: 0,
    transport: 0,
    food: 0,
    activities: 0,
  });

  const [savedBudgets, setSavedBudgets] = useState([]);

  // ---------------- INPUT CHANGE ----------------
  const handleChange = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: Number(e.target.value),
    });
  };

  // ---------------- TOTAL ----------------
  const total =
    budget.hotel + budget.transport + budget.food + budget.activities;

  // ---------------- SAVE BUDGET ----------------
  const saveBudget = async () => {
    try {
      await API.post("/budgets", budget);
      alert("Budget saved successfully ✅");
      fetchBudgets();
    } catch (error) {
      console.log(error);
      alert("Failed to save budget ❌");
    }
  };

  // ---------------- FETCH BUDGETS ----------------
  const fetchBudgets = async () => {
    try {
      const res = await API.get("/budgets");
      setSavedBudgets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------- DELETE BUDGET ----------------
  const deleteBudget = async (id) => {
    try {
      await API.delete(`/budgets/${id}`);
      setSavedBudgets((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  // ---------------- UI ITEMS ----------------
  const items = [
    { name: "hotel", label: "Hotel", icon: <Hotel /> },
    { name: "transport", label: "Transport", icon: <Car /> },
    { name: "food", label: "Food", icon: <Utensils /> },
    { name: "activities", label: "Activities", icon: <Ticket /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Budget Planner
        </h1>

        {/* INPUT GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="p-6 border rounded-2xl bg-gray-50">
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                {item.icon}
                <h2 className="text-xl font-bold">{item.label}</h2>
              </div>

              <input
                type="number"
                name={item.name}
                onChange={handleChange}
                placeholder={`Enter ${item.label} cost`}
                className="w-full p-3 border rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-10 bg-blue-600 text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Total Budget</h2>
          <p className="text-5xl font-extrabold">${total}</p>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveBudget}
          className="mt-8 w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700"
        >
          Save Budget
        </button>

        {/* SAVED BUDGETS */}
        <h2 className="text-3xl font-bold mt-14 mb-6 text-gray-800">
          Saved Budgets
        </h2>

        {savedBudgets.length === 0 && (
          <p className="text-gray-500">No saved budgets yet.</p>
        )}

        <div className="grid gap-5">
          {savedBudgets.map((b) => (
            <div
              key={b._id}
              className="bg-white border rounded-2xl p-5 shadow flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-lg">Total: ${b.total}</p>
                <p className="text-sm text-gray-500">
                  Hotel: {b.hotel} | Transport: {b.transport} | Food: {b.food} |
                  Activities: {b.activities}
                </p>
              </div>

              <button
                onClick={() => deleteBudget(b._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
