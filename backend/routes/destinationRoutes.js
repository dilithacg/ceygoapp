const express = require("express");
const router = express.Router();

const {
  createDestination,
  getDestinations,
  deleteDestination,
  updateDestination,
} = require("../controllers/destinationController");

// CREATE
router.post("/", createDestination);

// GET ALL
router.get("/", getDestinations);

// DELETE
router.delete("/:id", deleteDestination);
// UPDATE
router.put("/:id", updateDestination);

module.exports = router;
