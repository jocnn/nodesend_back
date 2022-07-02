const Users = require('../models/usersModel')
const bcrypt = require('bcrypt')

exports.newUser = async (req, res) => {
  const { email, password } = req.body

  let user = await Users.findOne({ email })

  if (user) {
    return res.status(400).json({ msg: "El usuario ya esta registrado" })
  }

  user = new Users(req.body)

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(password, salt)

  try {
    await user.save()
    res.json({msg: "Usuario creado correctamente"})
  } catch (error) {
    console.log(error)
  }
}