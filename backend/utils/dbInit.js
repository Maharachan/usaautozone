const { sequelize } = require("../models");

// Function to initialize the database
const initializeDatabase = async () => {
  try {
    console.log("Connecting to the database...");
    await sequelize.authenticate(); // Test database connection
    console.log("Database connection established successfully.");

    console.log("Synchronizing database models...");
    await sequelize.sync({ alter: true }); // Synchronize models with the database
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error during database initialization:", error);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = initializeDatabase;
