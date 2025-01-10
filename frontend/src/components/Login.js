import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after successful login
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message
    setLoading(true); // Start loading state

    // Static username and password
    const staticUsername = "admin";
    const staticPassword = "123";

    try {
      // Check if entered credentials match the static values
      if (
        credentials.username === staticUsername &&
        credentials.password === staticPassword
      ) {
        // Simulate a successful login
        localStorage.setItem("token", "static-token"); // Save a dummy token to localStorage
        onLoginSuccess(); // Trigger parent callback
        navigate("/admin"); // Redirect to admin page
      } else {
        throw new Error("Invalid username or password.");
      }
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
