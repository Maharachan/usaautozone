require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

// Database connection setup
const sequelize = new Sequelize(
  process.env.DB_NAME,   // Database name
  process.env.DB_USER,   // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST,   // Host (localhost)
    dialect: 'mysql',   // Dialect to use (MySQL in this case)
    logging: false,      // Disable logging for cleaner output
  }
);

module.exports = sequelize;
