const User = require('../models/usersModel')
const bcrypt = require('bcrypt')

exports.authenticateUser = async (req, res, next) => {

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.status(401).json({ msg: "El usuario no existe" })
    return next()
  }

  console.log("🚀 ~ file: authsController.js ~ line 15 ~ exports.authenticateUser= ~ user", user)
  console.log('usuario existe')

  if (bcrypt.compareSync(password, user.password)) {
    console.log(
      "🚀 ~ file: authsController.js ~ line 20 ~ exports.authenticateUser= ~ compareSync",
      "El Password es correcto"
	  )
  } else {
    res.status(401).json({ msg: "Password incorrecto" })
    return next()
  }

}

exports.authenticatedUser = async (req, res, next) => {

}