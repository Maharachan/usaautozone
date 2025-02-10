const db = require("../config/dbConfig");

exports.createAdminUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  try {
    await db.query(
      "INSERT INTO admin (username, password) VALUES (?, ?)",
      [username, password]
    );
 
    res.json({ success: true, message: "Admin user created successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create admin user." });
  }
};

// 🔹 Admin Login Controller
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM admin WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      return res.json({ success: true, message: "Login successful!" });
    }
    res.status(401).json({ success: false, message: "Invalid username or password" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login admin." });
  }
};