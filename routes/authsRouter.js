const express = require("express");
const router = express.Router();
const authController = require("../controllers/authsController");
const { check } = require("express-validator");
const auth = require("../middleware/authMiddleware");

router.post(
  "/",
  [
    check("email").isEmail().withMessage("Agrega un email válido"),
    check("password").not().isEmpty().withMessage("El password no puede ir vacío"),
  ],
  authController.authenticateUser);

router.get(
  "/",
  auth,
  authController.authenticatedUser,
);

module.exports = router;
