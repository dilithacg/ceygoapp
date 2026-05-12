import React, { useState } from "react";
import API from "../../services/api";

const GuideBookingModal = ({ isOpen, onClose, guide }) => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phone: "",
    date: "",
    days: 1,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/guide-bookings", {
        ...form,
        guideId: guide._id,
        guideName: guide.name,
        location: guide.location,
      });

      alert("Guide Booked Successfully ✅");
      onClose();
    } catch (error) {
      console.log(error);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Hire {guide?.name}</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="userName"
            placeholder="Name"
            className="w-full p-2 border"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full p-2 border"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            className="w-full p-2 border"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="w-full p-2 border"
            onChange={handleChange}
          />
          <input
            type="number"
            name="days"
            placeholder="Days"
            className="w-full p-2 border"
            onChange={handleChange}
          />

          <button className="bg-blue-600 text-white w-full py-2 rounded-xl">
            Confirm Booking
          </button>
        </form>

        <button onClick={onClose} className="mt-3 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default GuideBookingModal;
