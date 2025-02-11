const express = require("express");
const { createAdminUser , loginAdmin } = require("../controllers/adminController");

const router = express.Router();

router.post("/create-admin", createAdminUser);
router.post("/login", loginAdmin); 

module.exports = router;
 