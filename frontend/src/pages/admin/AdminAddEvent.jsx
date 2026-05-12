import React, { useState } from "react";
import API from "../../services/api";

const AdminAddEvent = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/events", form);

      alert("Event Added ✅");

      setForm({
        title: "",
        description: "",
        image: "",
        location: "",
        date: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed ❌");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-600">
        Add Cultural Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl"
        />

        <input
          type="text"
          name="date"
          placeholder="Event Date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl h-40"
        />

        <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold w-full">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AdminAddEvent;
