const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  deleteRestaurant,
} = require("../controllers/restaurantController");

// CREATE
router.post("/", createRestaurant);

// GET ALL
router.get("/", getRestaurants);

// GET SINGLE
router.get("/:id", getRestaurantById);

// DELETE
router.delete("/:id", deleteRestaurant);

module.exports = router;
