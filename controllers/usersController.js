const Users = require('../models/usersModel')

exports.newUser = async (req, res) => {
  const { email } = req.body

  let user = await Users.findOne({ email })

  if (user) {
    return res.status(400).json({ msg: "El usuario ya esta registrado" })
  } 

  res.json({msg: "Usuario creado correctamente"})
  user = await new Users(req.body)
  user.save()
}