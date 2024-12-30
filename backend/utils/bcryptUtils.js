const bcrypt = require("bcrypt");

// Function to hash a password
const hashPassword = async (password) => {
  try {
    const saltRounds = 10; // The number of hashing rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Hashing failed");
  }
};

// Function to validate a password against its hashed version
const validatePassword = async (password, hashedPassword) => {
  try {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  } catch (error) {
    console.error("Error validating password:", error);
    throw new Error("Password validation failed");
  }
};

module.exports = {
  hashPassword,
  validatePassword,
};
