const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("111111", 10);

  await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashedPassword,
    isAdmin: true,
  });

  console.log("Admin created successfully");

  process.exit();
};

createAdmin();
