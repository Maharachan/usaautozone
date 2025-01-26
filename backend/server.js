require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Endpoint for login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      return res.json({ success: true, token: "static-token" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid username or password" });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Endpoint to add a new car
app.post("/api/cars", upload.array("images", 10), async (req, res) => {
  try {
    // Parse the car data from the body
    const newCar = JSON.parse(req.body.data); 
    const images = req.files.map((file) => file.filename);

    // Check if required fields exist in the car data
    if (!newCar.name || !newCar.year || !newCar.price) {
      return res.status(400).json({ success: false, message: "Missing required car details" });
    }

    // Insert car data into the database
    const [result] = await db.query(
      "INSERT INTO cars (name, conditions, year, price, owners, miles, engineCC, color, bodyStyle, exteriorStyle, interiorStyle, driveType, transmission, fuel, trim, descriptions, features, safetyFeatures) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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

    const carId = result.insertId;

    // Insert images into the images table
    for (const image of images) {
      await db.query("INSERT INTO car_images (car_id, image_path) VALUES (?, ?)", [carId, image]);
    }

    return res.json({ success: true, message: "Car added successfully" });
  } catch (err) {
    // Do not log errors in the terminal, just return a generic error message
    return res.status(500).json({ success: false, message: "Failed to add car. Please try again." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
