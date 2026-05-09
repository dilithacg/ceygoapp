import React, { useEffect, useState } from "react";
import API from "../../services/api";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    const res = await API.get("/hotels");
    setHotels(res.data);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const deleteHotel = async (id) => {
    await API.delete(`/hotels/${id}`);
    fetchHotels();
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {hotels.map((h) => (
        <div key={h._id} className="bg-white rounded-2xl shadow">
          <img src={h.image} className="h-52 w-full object-cover" />

          <div className="p-4">
            <h2 className="text-xl font-bold">{h.name}</h2>
            <p className="text-gray-500">{h.location}</p>

            <button
              onClick={() => deleteHotel(h._id)}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
