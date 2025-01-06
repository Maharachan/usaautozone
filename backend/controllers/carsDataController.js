// controllers/carsDataController.js
const { Car } = require("../models"); // Adjust the model path based on your project structure

// Fetch all car data
const fetchAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    const carsWithImages = cars.map((car) => {
      // Assuming 'images' is a column in your database and it's an array of image URLs or binary data
      const images = car.images ? car.images.map(image => image.data) : []; // Adjust this according to how images are stored in the database
      return { ...car.toJSON(), images }; // Add images field to the car object
    });
    res.status(200).json(carsWithImages);
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
      const images = car.images ? car.images.map(image => image.data) : []; // Adjust this accordingly
      res.status(200).json({ ...car.toJSON(), images }); // Send car details with images
    } else {
      res.status(404).json({ message: "Car not found" }); // Return error if car not found
    }
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    res.status(500).json({ message: "Error fetching car details" });
  }
};

module.exports = { fetchAllCars, fetchCarById };
