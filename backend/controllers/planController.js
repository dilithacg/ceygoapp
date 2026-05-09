const Plan = require("../models/Plan");

// SAVE PLAN
exports.savePlan = async (req, res) => {
  try {
    const { destination, days } = req.body;

    const plan = await Plan.create({
      userId: req.user.id,
      destination,
      days,
    });

    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET USER PLANS
exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ userId: req.user.id });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE PLAN
exports.deletePlan = async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.savePlan = async (req, res) => {
  try {
    let { destination, days } = req.body;

    // 🔥 FORCE CLEAN FORMAT
    if (typeof days === "string") {
      try {
        days = JSON.parse(days);
      } catch {
        days = [];
      }
    }

    if (!Array.isArray(days)) {
      days = Object.values(days || {});
    }

    const plan = await Plan.create({
      userId: req.user.id,
      destination,
      days,
    });

    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
