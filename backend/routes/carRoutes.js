const express = require("express");
const multer = require("multer"); // Add this line to import multer
const { addCar, upload } = require("../controllers/carController");

const router = express.Router();

/**
 * Route to add a car with multiple image uploads
 * Uses `upload.array("images", 10)` to handle multiple images.
 */
router.post(
  "/",
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Handle multer-specific errors
        return res.status(400).json({ error: err.message });
      } else if (err) {
        // Handle general errors
        return res.status(500).json({ error: "Failed to upload images" });
      }
      next();
    });
  },
  addCar
);

module.exports = router;
