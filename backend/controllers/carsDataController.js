// controllers/carsDataController.js
const { Car } = require("../models"); // Adjust the model path based on your project structure

// Fetch all car data
const fetchAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Error fetching car data" });
  }
};

// Fetch a single car by ID
const fetchCarById = async (req, res) => {
  const { id } = req.params; // Get the car ID from the URL

  try {
    const car = await Car.findOne({ where: { id } }); // Find the car by its ID

    if (car) {
      res.status(200).json(car); // Send the car details in the response
    } else {
      res.status(404).json({ message: "Car not found" }); // Return error if car not found
    }
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    res.status(500).json({ message: "Error fetching car details" });
  }
};

module.exports = { fetchAllCars, fetchCarById };
