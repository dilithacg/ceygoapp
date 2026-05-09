import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  /* SAFE USER PARSE */
  let user = null;

  try {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    console.log("Invalid user in localStorage");
  }

  /* LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        CeyGo
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-6 font-medium items-center">
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

        {/* USER ONLY */}
        {user && <Link to="/my-bookings">My Bookings</Link>}

        {/* ADMIN ONLY */}
        {user?.isAdmin && (
          <Link
            to="/admin"
            className="text-red-600 font-bold hover:text-red-700 transition"
          >
            Admin
          </Link>
        )}
      </div>

      {/* AUTH SECTION */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="font-semibold">{user.name}</span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
