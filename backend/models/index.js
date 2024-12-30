const sequelize = require("../config/config");
const Admin = require("./Admin");
const Car = require("./Car");

// Sync Models
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true }); // Create/Update tables
    console.log("Tables synced.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = { sequelize, Admin, Car, initializeDatabase };
