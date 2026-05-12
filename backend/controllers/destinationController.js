const Destination = require("../models/Destination");

// CREATE
const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
// GET ALL DESTINATIONS (with optional filter)
const getDestinations = async (req, res) => {
  try {
    const { popular } = req.query;

    let query = {};

    if (popular === "true") {
      query.rating = { $gte: 4.5 };
    }

    const data = await Destination.find(query);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDestination,
  getDestinations,
  deleteDestination,
  updateDestination,
};
