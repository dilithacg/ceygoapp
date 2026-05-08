import React, { useEffect, useState } from "react";
import API from "../services/api";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await API.get("/bookings");
      setBookings(res.data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      <div className="grid gap-4">
        {bookings.map((b) => (
          <div key={b._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold text-blue-600">
              {b.hotelId?.name}
            </h2>

            <p className="text-gray-500">{b.hotelId?.location}</p>

            <hr className="my-2" />

            <p>Name: {b.name}</p>
            <p>Email: {b.email}</p>
            <p>Date: {b.date}</p>
            <p>Guests: {b.guests}</p>
            <p>Request: {b.request}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
