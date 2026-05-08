import React, { useState } from "react";
import { X } from "lucide-react";
import API from "../../services/api"; // adjust path if needed

const BookingModal = ({ title, isOpen, onClose, hotelId }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: 1,
    request: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", {
        hotelId,
        name: form.name,
        email: form.email,
        date: form.date,
        guests: form.guests,
        request: form.request,
      });

      alert("Booking Successful!");
      onClose();
    } catch (error) {
      console.log(error.response?.data || error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-lg relative">
        {/* Close */}
        <button onClick={onClose} className="absolute top-5 right-5">
          <X />
        </button>

        <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border rounded-xl"
          />

          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl"
          />

          <input
            name="date"
            onChange={handleChange}
            value={form.date}
            type="date"
            className="w-full p-4 border rounded-xl"
          />

          <input
            name="guests"
            onChange={handleChange}
            value={form.guests}
            type="number"
            placeholder="Guests"
            className="w-full p-4 border rounded-xl"
          />

          <textarea
            name="request"
            onChange={handleChange}
            value={form.request}
            placeholder="Special Request"
            className="w-full p-4 border rounded-xl h-32"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
