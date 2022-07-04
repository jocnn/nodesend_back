const express = require("express");
const router = express.Router();
const linksController = require("../controllers/linksController");
const { check } = require("express-validator");
const auth = require("../middleware/authMiddleware");

router.post(
  "/",
  auth,
  linksController.newLink,
)

module.exports = router