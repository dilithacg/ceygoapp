const mongoose = require("mongoose");

const restaurantBookingSchema = new mongoose.Schema(
  {
    restaurantName: String,
    restaurantId: String,

    name: String,
    email: String,
    phone: String,

    date: String,
    time: String,
    people: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("RestaurantBooking", restaurantBookingSchema);
