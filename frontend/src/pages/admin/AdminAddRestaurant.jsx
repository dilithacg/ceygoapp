import React, { useState } from "react";
import API from "../../services/api";

const AdminAddRestaurant = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
    cuisine: "",
    rating: "",
    priceRange: "",
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
      await API.post("/restaurants", form);

      alert("Restaurant Added ✅");

      setForm({
        name: "",
        location: "",
        description: "",
        image: "",
        cuisine: "",
        rating: "",
        priceRange: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed ❌");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Add Restaurant</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Restaurant Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          name="cuisine"
          placeholder="Cuisine"
          value={form.cuisine}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          name="rating"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          name="priceRange"
          placeholder="Price Range"
          value={form.priceRange}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full font-bold">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AdminAddRestaurant;
