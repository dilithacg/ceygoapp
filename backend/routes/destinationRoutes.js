const express = require("express");
const router = express.Router();

const {
  createDestination,
  getDestinations,
  deleteDestination,
} = require("../controllers/destinationController");

// CREATE
router.post("/", createDestination);

// GET ALL
router.get("/", getDestinations);

// DELETE
router.delete("/:id", deleteDestination);

module.exports = router;
