import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const staticUsername = "admin";
    const staticPassword = "123";

    try {
      if (
        credentials.username === staticUsername &&
        credentials.password === staticPassword
      ) {
        localStorage.setItem("token", "static-token");
        onLoginSuccess();
        navigate("/admin");
      } else {
        throw new Error("Invalid username or password.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <div className="login-divider"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="login-input"
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button1" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
