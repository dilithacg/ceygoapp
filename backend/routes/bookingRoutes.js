const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  deleteBooking,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

/* PROTECTED ROUTES */
router.post("/", protect, createBooking);
router.get("/", protect, getBookings);

/* DELETE BOOKING */
router.delete("/:id", protect, deleteBooking);

module.exports = router;
