const express = require("express");
const { addCar, upload } = require("../controllers/carController");

const router = express.Router();

// Add a car with image upload
router.post("/", upload.single("image"), addCar);

module.exports = router;
