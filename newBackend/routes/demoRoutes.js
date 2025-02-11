const express = require("express");
const router = express.Router();
const { test } = require("../controllers/demoController");

// Test routes
router.get("/test",test );

module.exports = router;
