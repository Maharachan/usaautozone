const express = require("express");
const { createCar , getCarById ,getAllCars  } = require("../controllers/carController");
const upload = require("../utils/multer"); 

const router = express.Router();

// Route to fetch all cars
router.get("/", getAllCars);
// Upload up to 5 images per car
router.post("/create", upload.array("images", 5), createCar);
//For One car
router.get("/:id", getCarById);

module.exports = router;
