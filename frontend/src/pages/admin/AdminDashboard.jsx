import React, { useState } from "react";
import AddHotel from "./AddHotel";
import Hotels from "./Hotels";
import Bookings from "./Bookings";
import AdminAddDestination from "./AdminAddDestination";

const AdminDashboard = () => {
  const [tab, setTab] = useState("hotels");

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Admin Dashboard</h1>

      {/* NAV TABS */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTab("hotels")}
          className={`px-4 py-2 rounded-xl ${
            tab === "hotels" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Hotels
        </button>

        <button
          onClick={() => setTab("add")}
          className={`px-4 py-2 rounded-xl ${
            tab === "add" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Add Hotel
        </button>

        <button
          onClick={() => setTab("bookings")}
          className={`px-4 py-2 rounded-xl ${
            tab === "bookings" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Bookings
        </button>
        <button
          onClick={() => setTab("destinations")}
          className={`px-4 py-2 rounded-xl ${
            tab === "destinations" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Add Destination
        </button>
      </div>

      {/* CONTENT */}
      {tab === "hotels" && <Hotels />}
      {tab === "add" && <AddHotel />}
      {tab === "bookings" && <Bookings />}
      {tab === "destinations" && <AdminAddDestination />}
    </div>
  );
};

export default AdminDashboard;
