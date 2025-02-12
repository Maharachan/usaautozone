require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Routes
const demoRoutes = require("./routes/demoRoutes");
const adminRoutes = require("./routes/adminRoutes");
const carRoutes = require("./routes/carRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/demo", demoRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cars", carRoutes);


module.exports = app;
