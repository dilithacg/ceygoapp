const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // (optional if you have auth)
    },
    hotel: Number,
    transport: Number,
    food: Number,
    activities: Number,
    total: Number,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Budget", budgetSchema);
