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
  model: {
    type: DataTypes.STRING,
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
      const rawFeatures = this.getDataValue("features");
      return rawFeatures ? rawFeatures.split(",") : [];
    },
    set(value) {
      this.setDataValue("features", Array.isArray(value) ? value.join(",") : value);
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON, // Store an array of image metadata as JSON
    allowNull: false,
    get() {
      const rawImages = this.getDataValue("images");
      return rawImages ? JSON.parse(rawImages) : [];
    },
    set(value) {
      this.setDataValue("images", JSON.stringify(value));
    },
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
});

module.exports = Car;
