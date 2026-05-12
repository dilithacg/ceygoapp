const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const planRoutes = require("./routes/planRoutes");

const destinationRoutes = require("./routes/destinationRoutes");

const eventRoutes = require("./routes/eventRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const restaurantBookingRoutes = require("./routes/restaurantBookingRoutes");
const guideRoutes = require("./routes/guideRoutes");
const guideBookingRoutes = require("./routes/guideBookingRoutes");
const driverRoutes = require("./routes/driverRoutes");
const driverBookingRoutes = require("./routes/driverBookingRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/plans", planRoutes);

app.use("/api/destinations", destinationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/restaurant-bookings", restaurantBookingRoutes);
app.use("/api/guides", guideRoutes);
app.use("/api/guide-bookings", guideBookingRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/driver-bookings", driverBookingRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
