// routes/carsDataRoutes.js
const express = require("express");
const { fetchAllCars, fetchCarById } = require("../controllers/carsDataController"); // Import the new controller

const router = express.Router();

// Route to fetch all cars
router.get("/fetch", fetchAllCars);

// Route to fetch a single car by ID
router.get("/fetch/:id", fetchCarById); // Handle single car fetch by ID

module.exports = router;
