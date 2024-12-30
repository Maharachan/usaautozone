// models/Admin.js
const { DataTypes } = require("sequelize");
const sequelize = require('../config/config');  // Adjust according to actual location

const Admin = sequelize.define("Admin", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Admin;
