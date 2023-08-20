import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import your CSS file for styling

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate a login action (replace with actual authentication logic)
    if (username === "yourusername" && password === "yourpassword") {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
