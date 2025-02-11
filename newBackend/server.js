const app = require("./app");
const db = require("./config/dbConfig");

const PORT = process.env.PORT || 5000;

// DB Checking
db.getConnection()
  .then(() => {
    console.log("✅ Database is connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database not connected:", err.message);
  });
