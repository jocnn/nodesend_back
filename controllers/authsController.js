const User = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env.development' })
const { validationResult } = require("express-validator");

exports.authenticateUser = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
  const authHeader = req.get("Authorization")

  if (authHeader) {
    const token = authHeader.split(" ")[1]
    
    try {
      const user = jwt.verify(token, process.env.SECRET_KEY)
      res.json({ user })
    } catch (error) {
      console.log("JWT no valido")
    }
  }
  return next()
}
