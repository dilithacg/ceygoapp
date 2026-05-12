import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Star, MapPin } from "lucide-react";
import DriverBookingModal from "../components/common/DriverBookingModal";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      const res = await API.get("/drivers");
      setDrivers(res.data);
    };

    fetchDrivers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-16">
        Drivers
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {drivers.map((d) => (
          <div
            key={d._id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <img src={d.image} className="h-64 w-full object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{d.name}</h2>

              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <MapPin size={16} />
                {d.location}
              </div>

              <p className="text-gray-600 mt-2">Vehicle: {d.vehicleType}</p>

              <div className="flex items-center gap-2 text-yellow-500 mt-2">
                <Star size={16} fill="gold" />
                {d.rating}
              </div>

              <p className="font-bold text-blue-600 mt-2">${d.pricePerKm}/km</p>
              <button
                onClick={() => {
                  setSelectedDriver(d);
                  setOpen(true);
                }}
                className="mt-5 bg-blue-600 text-white w-full py-2 rounded-xl font-bold"
              >
                Book Driver
              </button>
            </div>
          </div>
        ))}
      </div>
      <DriverBookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        driver={selectedDriver}
      />
    </div>
  );
};

export default Drivers;
