const User = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '.env.development'})

exports.authenticateUser = async (req, res, next) => {

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.status(401).json({ msg: "El usuario no existe" })
    return next()
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        nombre: user.name
      },
      process.env.SECRET_KEY,
      { expiresIn: '8h' });
        
    res.json({token})
  } else {
    res.status(401).json({ msg: "Password incorrecto" })
    return next()
  }

}

exports.authenticatedUser = async (req, res, next) => {

}