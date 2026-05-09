const express = require("express");
const router = express.Router();

const {
  savePlan,
  getPlans,
  deletePlan,
} = require("../controllers/planController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, savePlan);
router.get("/", protect, getPlans);
router.delete("/:id", protect, deletePlan);

module.exports = router;
