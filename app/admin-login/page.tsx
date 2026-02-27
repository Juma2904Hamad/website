"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const res = await fetch("https://your-backend.infinityfreeapp.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful! Welcome, " + data.user_name);
      } else {
        setMessage("Login failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error connecting to API.");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
}