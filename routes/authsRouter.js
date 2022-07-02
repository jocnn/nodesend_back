const express = require("express");
const router = express.Router();
const authController = require("../controllers/authsController");
const { check } = require("express-validator");

router.post("/", authController.authenticateUser);

router.get("/", authController.authenticatedUser);

module.exports = router;
