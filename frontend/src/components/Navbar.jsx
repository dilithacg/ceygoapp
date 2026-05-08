import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-600">CeyGo</h1>

      <div className="flex gap-6 font-medium">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/events">Events</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/my-bookings">My Bookings</Link>
      </div>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
