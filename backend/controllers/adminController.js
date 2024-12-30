const jwt = require("jsonwebtoken");
const Admin = require('../models/Admin');
require("dotenv").config();

// Admin Registration (without bcrypt)
const registerAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Store password as plain text (not recommended in production)
    const admin = await Admin.create({ username, password });
    res.status(201).json({ message: "Admin registered.", admin });
  } catch (error) {
    res.status(500).json({ message: "Error registering admin.", error });
  }
};

// Admin Login (without bcrypt)
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) return res.status(404).json({ message: "Admin not found." });

    // Comparing password directly (no hashing, using plain text comparison)
    if (password !== admin.password) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: "Error logging in.", error });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};
