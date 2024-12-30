import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after successful login
import "./Login.css"

function Login({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state during API call
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message
    setLoading(true); // Start loading state
  
    try {
      // Hardcoded URL for the backend API
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials), // credentials contain username and password
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }
  
      localStorage.setItem("token", data.token); // Save token to localStorage
      onLoginSuccess(); // Trigger parent callback
      navigate("/admin"); // Redirect to admin page
    } catch (err) {
      setError(err.message); // Display error message if login fails
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>} {/* Display error if any */}
        <button type="submit2" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
