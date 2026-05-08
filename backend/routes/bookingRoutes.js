const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

/* PROTECTED ROUTES */
router.post("/", protect, createBooking);
router.get("/", protect, getBookings);

module.exports = router;
