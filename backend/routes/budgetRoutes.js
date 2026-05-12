const express = require("express");
const router = express.Router();

const {
  createBudget,
  getBudgets,
  deleteBudget,
} = require("../controllers/budgetController");

// CREATE
router.post("/", createBudget);

// GET ALL
router.get("/", getBudgets);

// DELETE
router.delete("/:id", deleteBudget);

module.exports = router;
