const Booking = require("../models/Booking");

/* CREATE BOOKING */
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user.id, // from token
      hotelId: req.body.hotelId,
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
      guests: req.body.guests,
      request: req.body.request,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET USER BOOKINGS */
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.user.id,
    }).populate("hotelId");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
};
