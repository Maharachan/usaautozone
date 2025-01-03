const { DataTypes } = require("sequelize");
const sequelize = require("../config/config"); // Adjust the path to your Sequelize configuration

// Car Model
const Car = sequelize.define("Car", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  miles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fuel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  features: {
    type: DataTypes.TEXT, // Store as comma-separated values in the database
    allowNull: false,
    get() {
      // Convert stored comma-separated values back into an array
      const rawFeatures = this.getDataValue("features");
      return rawFeatures ? rawFeatures.split(",") : [];
    },
    set(value) {
      // Convert array into comma-separated string before storing
      this.setDataValue("features", Array.isArray(value) ? value.join(",") : value);
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB("long"), // Store binary data (LONGBLOB equivalent in MySQL)
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
});

module.exports = Car;
