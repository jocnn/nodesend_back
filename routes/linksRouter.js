const express = require("express");
const router = express.Router();
const linksController = require("../controllers/linksController");
const { check } = require("express-validator");
const auth = require("../middleware/authMiddleware");

router.post(
	'/',
  [
    check('name').not().isEmpty().withMessage('El nombre es obligatorio'),
    check('name_origin').not().isEmpty().withMessage('Sube un archivo'),
  ],
	auth,
	linksController.newLink
)

module.exports = router