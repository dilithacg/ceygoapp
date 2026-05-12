import React, { useState } from "react";
import API from "../../services/api";

const AdminAddGuide = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    languages: "",
    experience: "",
    pricePerDay: "",
    rating: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/guides", {
        ...form,
        languages: form.languages.split(","),
      });

      alert("Guide Added ✅");

      setForm({
        name: "",
        location: "",
        languages: "",
        experience: "",
        pricePerDay: "",
        rating: "",
        image: "",
        description: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed ❌");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Add Guide</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="languages"
          placeholder="Languages (English,Sinhala)"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="experience"
          placeholder="Experience"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="pricePerDay"
          placeholder="Price Per Day"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="rating"
          placeholder="Rating"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold">
          Add Guide
        </button>
      </form>
    </div>
  );
};

export default AdminAddGuide;
