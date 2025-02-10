const db = require("../config/dbConfig");
const cloudinary = require("../config/cloudinary");

// Fetch all cars with their first image
exports.getAllCars = async (req, res) => {
    try {
      const [cars] = await db.query(
        `SELECT cars.id, cars.name, cars.price, cars.transmission, cars.trim, cars.miles, 
                MIN(car_images.image_url) AS image_url
         FROM cars
         LEFT JOIN car_images ON cars.id = car_images.car_id
         GROUP BY cars.id, cars.name, cars.price, cars.transmission, cars.trim, cars.miles`
      );
  
      res.json({ success: true, cars });
    } catch (err) {
      console.error("Error fetching cars:", err);
      res.status(500).json({ success: false, message: "Failed to fetch cars." });
    }
  };

// Create a new car with images
exports.createCar = async (req, res) => {
  try {
    const newCar = JSON.parse(req.body.data); // Parse car details
    const imageFiles = req.files; // Get uploaded image files

    if (
      !newCar.name ||
      !newCar.year ||
      !newCar.price ||
      imageFiles.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required car details or images",
      });
    }
    console.log(imageFiles);
    // Upload images to Cloudinary and get URLs
    const imageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "car-images",
        });
        return result.secure_url; // Cloudinary URL
      })
    );

    // Insert car details into `cars` table
    const [carResult] = await db.query(
      `INSERT INTO cars (name, conditions, year, price, owners, miles, engineCC, color, bodyStyle, 
        exteriorStyle, interiorStyle, driveType, transmission, fuel, trim, descriptions, features, safetyFeatures) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        newCar.name,
        newCar.conditions,
        newCar.year,
        newCar.price,
        newCar.owners,
        newCar.miles,
        newCar.engineCC,
        newCar.color,
        newCar.bodyStyle,
        newCar.exteriorStyle,
        newCar.interiorStyle,
        newCar.driveType,
        newCar.transmission,
        newCar.fuel,
        newCar.trim,
        newCar.descriptions,
        JSON.stringify(newCar.features),
        JSON.stringify(newCar.safetyFeatures),
      ]
    );

    const carId = carResult.insertId; // Get the ID of the newly inserted car

    // Insert images into `car_images` table
    for (const url of imageUrls) {
      await db.query(
        "INSERT INTO car_images (car_id, image_url) VALUES (?, ?)",
        [carId, url]
      );
    }

    res.json({
      success: true,
      message: "Car created successfully!",
      carId,
      imageUrls,
    });
  } catch (err) {
    console.error("Error creating car:", err);
    res.status(500).json({ success: false, message: "Failed to create car." });
  }
};

// Fetch a single car by ID with all details & images
exports.getCarById = async (req, res) => {
  try {
    const carId = req.params.id;

    // Fetch car details from `cars` table
    const [[carDetails]] = await db.query(
      `SELECT id, name, conditions, year, price, owners, miles, engineCC, color, bodyStyle,
                exteriorStyle, interiorStyle, driveType, transmission, fuel, trim, descriptions,
                features, safetyFeatures
         FROM cars WHERE id = ?`,
      [carId]
    );

    if (!carDetails) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    // Fetch all images for this car from `car_images` table
    const [images] = await db.query(
      `SELECT image_url FROM car_images WHERE car_id = ?`,
      [carId]
    );

    // Attach images to the response
    carDetails.images = images.map((img) => img.image_url);

    res.json({ success: true, car: carDetails });
  } catch (err) {
    console.error("Error fetching car details:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch car details." });
  }
};
