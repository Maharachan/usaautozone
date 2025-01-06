const multer = require("multer");
const Car = require("../models/Car");

// Configure multer for image uploads
const storage = multer.memoryStorage(); // Using memory storage for simplicity; switch to diskStorage if needed
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
}).array("images", 10); // Accept up to 10 images per car

const addCar = async (req, res) => {
  try {
    // Extract car details from the request body
    const { name, year, model, miles, transmission, fuel, features, price } = req.body;

    // Check if images are present in the request
    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(400).json({ error: "At least one image is required." });
    }

    // Perform basic validation for car details
    if (!name || !year || !price) {
      return res.status(400).json({ error: "Name, year, and price are required fields." });
    }

    // Map images to their binary data (buffer)
    const imageBuffers = images.map((image) => image.buffer);

    // Save car details to the database
    const car = await Car.create({
      name,
      year,
      model,
      miles,
      transmission,
      fuel,
      features: features ? features.split(",") : [], // Split features if provided
      price,
      images: imageBuffers, // Store image buffers in the database (binary data)
    });

    // Return success response
    return res.status(201).json({
      message: "Car added successfully",
      car: {
        name: car.name,
        year: car.year,
        model:car.model,
        miles: car.miles,
        transmission: car.transmission,
        fuel: car.fuel,
        features: car.features,
        price: car.price,
        images: car.images.length,
      },
    });
  } catch (error) {
    console.error("Error adding car:", error);
    return res.status(500).json({ error: "Failed to add car. Please try again." });
  }
};

module.exports = {
  upload,
  addCar,
};
