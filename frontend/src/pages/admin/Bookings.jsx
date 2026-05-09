import React, { useEffect, useState } from "react";
import API from "../../services/api";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await API.get("/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    await API.delete(`/bookings/${id}`);
    fetchBookings();
  };

  return (
    <div className="space-y-4">
      {bookings.map((b) => (
        <div
          key={b._id}
          className="bg-white p-5 rounded-2xl shadow flex justify-between"
        >
          <div>
            <h2 className="font-bold text-xl">{b.hotel?.name}</h2>

            <p>{b.name}</p>
            <p>{b.email}</p>
            <p>{b.date}</p>
            <p>{b.guests}</p>
          </div>

          <button
            onClick={() => deleteBooking(b._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
