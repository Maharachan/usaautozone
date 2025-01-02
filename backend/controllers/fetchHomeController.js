const { Car } = require("../models");

const fetchAllCars = async (req, res) => {
  try {
    // Fetch all cars from the database, ordered by creation date
    const cars = await Car.findAll({
      order: [["createdAt", "DESC"]], // Order cars by creation date in descending order
    });

    // Log the fetched data for debugging
    console.log("Fetched cars:", cars);

    if (cars.length === 0) {
      // No cars found in the database
      return res.status(404).json({ message: "No cars available." });
    }

    // Sending the cars data with image data as base64
    const carsWithImages = cars.map((car) => ({
      ...car.dataValues,
      image: {
        data: car.image_data.toString("base64"), // Ensure image is Base64 encoded
      },
    }));

    // Send the fetched cars as a JSON response
    res.status(200).json(carsWithImages);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Error fetching car data" });
  }
};
