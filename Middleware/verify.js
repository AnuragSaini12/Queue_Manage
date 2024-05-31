const jwt = require("jsonwebtoken");
require("dotenv").config();
async function verify(req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (!token) return res.json({ status: 404, message: "not authorized" });
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (decoded) {
      next();
    }
  } catch (error) {
    console.log("error in middleware verify", error);
    res.json({ message: "error" });
  }
}

module.exports = verify;
