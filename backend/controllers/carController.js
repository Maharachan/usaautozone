const multer = require("multer");
const Car = require("../models/Car");

// Multer setup for file uploads
const storage = multer.memoryStorage(); // Store files in memory (as a buffer)
const upload = multer({ storage });

// Add a new car
const addCar = async (req, res) => {
  try {
    const { name, year, miles, transmission, fuel, features, price } = req.body;
    const image = req.file; // Get the uploaded image

    // Validate input data
    if (!name || !year || !miles || !transmission || !fuel || !features || !price || !image) {
      return res.status(400).json({ message: "All fields, including an image, are required." });
    }

    // Save the car data in the database
    const car = await Car.create({
      name,
      year: parseInt(year, 10), // Convert year to an integer
      miles,
      transmission,
      fuel,
      features: features.split(","), // Convert features string to an array
      price: parseFloat(price), // Convert price to a float
      image: image.buffer, // Save image as a BLOB
    });

    res.status(201).json({
      message: "Car added successfully.",
      car: {
        id: car.id,
        name: car.name,
        year: car.year,
        miles: car.miles,
        transmission: car.transmission,
        fuel: car.fuel,
        features: car.features,
        price: car.price,
      },
    });
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({ message: "Error adding car.", error: error.message });
  }
};

module.exports = {
  addCar,
  upload, // Export Multer middleware for use in routes
};
