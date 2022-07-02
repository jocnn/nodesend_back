const User = require('../models/usersModel')

exports.authenticateUser = async (req, res, next) => {

  const { email } = req.body

  const user = await User.findOne({ email })
  console.log(user)

  if (!user) {
    res.status(401).json({ msg: "El usuario no existe" })
    return next()
  }

}

exports.authenticatedUser = async (req, res, next) => {

}