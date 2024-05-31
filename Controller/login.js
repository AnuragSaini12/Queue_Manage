const jwt = require("jsonwebtoken");
const express = require("express");
const verify = require("../Middleware/verify");
const Connection = require("../Connection");

async function handleLogin(req, res) {
  const { username, password } = req.body;
  const query = "SELECT * FROM user_login WHERE username = ? AND password = ?";
  Connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
}

module.exports = { handleLogin };
