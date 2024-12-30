const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./models"); // Ensure this imports correctly
const adminRoutes = require("./routes/adminRoutes");
const carRoutes = require("./routes/carRoutes");
const carsDataRoutes = require("./routes/carsDataRoutes"); // Import the new cars data route

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Built-in Express middleware for JSON parsing
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/carsdata", carsDataRoutes); // Add the new cars data route

// Initialize Database and Start Server
initializeDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("Database initialization failed:", error);
    process.exit(1); // Exit the process if database connection fails
  });
