import React, { useState } from "react";
import API from "../../services/api";

const AddHotel = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    image: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await API.post("/hotels", form);

    alert("Hotel added!");

    setForm({
      name: "",
      location: "",
      image: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded-3xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold">Add Hotel</h2>

      <input
        placeholder="Name"
        className="w-full p-3 border rounded-xl"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Location"
        className="w-full p-3 border rounded-xl"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <input
        placeholder="Image URL"
        className="w-full p-3 border rounded-xl"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className="w-full p-3 border rounded-xl h-28"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
        Add Hotel
      </button>
    </form>
  );
};

export default AddHotel;
