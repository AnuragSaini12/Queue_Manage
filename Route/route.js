const express = require("express");
const verify = require("../Middleware/verify.js");
const router = express.Router();
const { handleLogin } = require("../Controller/login.js");
const { createUser, handleGetUser } = require("../Controller/user.js");

router.post("/login", handleLogin);
router.post("/create", verify, createUser);
router.get("/get", verify, handleGetUser);

module.exports = router;
