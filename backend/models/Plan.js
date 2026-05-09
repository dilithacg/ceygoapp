const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    destination: String,
    days: Object, // full AI JSON
  },
  { timestamps: true },
);

module.exports = mongoose.model("Plan", planSchema);
