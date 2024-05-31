const express = require("express");
const verify = require("../Middleware/verify.js");
const router = express.Router();
const { handleLogin } = require("../Controller/login.js");
const { createUser } = require("../Controller/user.js");

router.post("/login", handleLogin);
router.post("/create", verify, createUser);

module.exports = router;
