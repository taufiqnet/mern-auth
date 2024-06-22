const express = require("express");
const router = express.Router();

const signupController = require("../controller/signup");

router.post("/register", signupController.createUser);

module.exports = router;
