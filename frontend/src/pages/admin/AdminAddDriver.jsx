import React, { useState } from "react";
import API from "../../services/api";

const AdminAddDriver = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    vehicleType: "",
    phone: "",
    pricePerKm: "",
    rating: "",
    image: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/drivers", form);
      alert("Driver Added ✅");

      setForm({
        name: "",
        location: "",
        vehicleType: "",
        phone: "",
        pricePerKm: "",
        rating: "",
        image: "",
        experience: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed ❌");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Add Driver</h2>

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
          name="vehicleType"
          placeholder="Vehicle Type (Car/Van/TukTuk)"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />
        <input
          name="pricePerKm"
          placeholder="Price Per KM"
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
          name="experience"
          placeholder="Experience"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold">
          Add Driver
        </button>
      </form>
    </div>
  );
};

export default AdminAddDriver;
