import React, { useState } from "react";
import API from "../../services/api";

const DriverBookingModal = ({ isOpen, onClose, driver }) => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    days: 1,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/driver-bookings", {
        ...form,
        driverId: driver._id,
        driverName: driver.name,
      });

      alert("Driver Booked Successfully 🚗");
      onClose();
    } catch (error) {
      console.log(error);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-[420px]">
        <h2 className="text-2xl font-bold mb-4">Book {driver?.name}</h2>

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
            name="pickupLocation"
            placeholder="Pickup Location"
            className="w-full p-2 border"
            onChange={handleChange}
          />
          <input
            name="dropLocation"
            placeholder="Drop Location"
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
            type="time"
            name="time"
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

          <button className="bg-blue-600 text-white w-full py-2 rounded-xl font-bold">
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

export default DriverBookingModal;
