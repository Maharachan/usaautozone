const { fetchAllCars } = require("../controllers/fetchHomeController"); // Import the updated controller

const router = require("express").Router();

// Route to fetch all cars
router.get('/fetch-all-cars', (req, res) => {
    res.send('This is the response for /fetch-all-cars');
  });

module.exports = router;
