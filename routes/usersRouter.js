const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const { check } = require('express-validator')

router.post(
	"/",
	[
		check("name").not().isEmpty().withMessage("El nombre es obligatorio"),
		check("email")
      .isEmail()
      .withMessage("Agrege un email que sea válido")
			.not()
			.isEmpty()
			.withMessage("El email es obligatorio"),
		check("password")
			.isLength({ min: 6 })
			.withMessage("El password debe ser de al menos 6 caracteres"),
	],
	userController.newUser
);

module.exports = router