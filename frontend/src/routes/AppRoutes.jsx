import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Destinations from "../pages/Destinations";
import Planner from "../pages/Planner";
import Budget from "../pages/Budget";
import Weather from "../pages/Weather";
import Events from "../pages/Events";
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/admin/AdminDashboard";
import NotFound from "../pages/NotFound";

import Hotels from "../pages/Hotels";
import Restaurants from "../pages/Restaurants";
import Guides from "../pages/Guides";
import Drivers from "../pages/Drivers";

import DestinationDetails from "../pages/DestinationDetails";
import HotelDetails from "../pages/HotelDetails";
import MyBookings from "../pages/MyBookings";
import AdminRoute from "./AdminRoute";

import MyPlans from "../pages/MyPlans";
import CultureEventDetails from "../pages/CultureEventDetails";
import RestaurantDetails from "../pages/RestaurantDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="planner" element={<Planner />} />
          <Route path="budget" element={<Budget />} />
          <Route path="weather" element={<Weather />} />
          <Route path="events" element={<Events />} />
          <Route path="profile" element={<Profile />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="guides" element={<Guides />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="destinations/:id" element={<DestinationDetails />} />
          <Route path="hotels/:id" element={<HotelDetails />} />
          <Route path="my-bookings" element={<MyBookings />} />
          <Route path="my-plans" element={<MyPlans />} />
          <Route path="events/:id" element={<CultureEventDetails />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
