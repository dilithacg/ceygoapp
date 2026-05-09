const express = require("express");

const router = express.Router();

const {
  createHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");

const protect = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/", protect, adminMiddleware, createHotel);
router.delete("/:id", protect, adminMiddleware, deleteHotel);
router.post("/", createHotel);

router.get("/", getHotels);

router.get("/:id", getHotelById);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

module.exports = router;
