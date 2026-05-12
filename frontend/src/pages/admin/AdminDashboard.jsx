import React, { useState } from "react";

import AddHotel from "./AddHotel";
import Hotels from "./Hotels";
import Bookings from "./Bookings";

import AdminAddDestination from "./AdminAddDestination";
import AdminDestinations from "./AdminDestinations";

import AdminAddEvent from "./AdminAddEvent";
import AdminEvents from "./AdminEvents";
import AdminAddRestaurant from "./AdminAddRestaurant";
import AdminAddGuide from "./AdminAddGuide";
import AdminAddDriver from "./AdminAddDriver";

const AdminDashboard = () => {
  const [tab, setTab] = useState("hotels");

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-blue-600">Admin Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Manage hotels, bookings, and destinations
        </p>
      </div>

      {/* NAVIGATION */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => setTab("hotels")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
            tab === "hotels"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Hotels
        </button>

        <button
          onClick={() => setTab("addHotel")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
            tab === "addHotel"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Add Hotel
        </button>

        <button
          onClick={() => setTab("bookings")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
            tab === "bookings"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Bookings
        </button>

        <button
          onClick={() => setTab("addDestination")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
            tab === "addDestination"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Add Destination
        </button>

        <button
          onClick={() => setTab("manageDestinations")}
          className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
            tab === "manageDestinations"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Manage Destinations
        </button>
        <button
          onClick={() => setTab("addEvent")}
          className={`px-6 py-3 rounded-2xl font-bold ${
            tab === "addEvent" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Add Event
        </button>

        <button
          onClick={() => setTab("events")}
          className={`px-6 py-3 rounded-2xl font-bold ${
            tab === "events" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Manage Events
        </button>
        <button
          onClick={() => setTab("restaurant")}
          className={`px-6 py-3 rounded-2xl font-bold ${
            tab === "restaurant" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Restaurant
        </button>
        <button
          onClick={() => setTab("addGuide")}
          className={`px-6 py-3 rounded-2xl font-bold ${
            tab === "addGuide" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Add Guide
        </button>
        <button
          onClick={() => setTab("AdminAddDriver")}
          className={`px-6 py-3 rounded-2xl font-bold ${
            tab === "AdminAddDriver" ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Drivers
        </button>
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        {tab === "hotels" && <Hotels />}

        {tab === "addHotel" && <AddHotel />}

        {tab === "bookings" && <Bookings />}
        {tab === "AdminAddDriver" && <AdminAddDriver />}
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        {tab === "hotels" && <Hotels />}

        {tab === "addHotel" && <AddHotel />}

        {tab === "bookings" && <Bookings />}
        {tab === "addGuide" && <AdminAddGuide />}
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        {tab === "hotels" && <Hotels />}

        {tab === "addHotel" && <AddHotel />}

        {tab === "bookings" && <Bookings />}

        {tab === "addDestination" && <AdminAddDestination />}

        {tab === "manageDestinations" && <AdminDestinations />}
        {tab === "addEvent" && <AdminAddEvent />}

        {tab === "events" && <AdminEvents />}
        {tab === "restaurant" && <AdminAddRestaurant />}
      </div>
    </div>
  );
};

export default AdminDashboard;
