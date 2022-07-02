const Users = require('../models/usersModel')

exports.newUser = async (req, res) => {
  const user = await new Users(req.body)
  user.save()
  res.json({msg: "Usuario creado correctamente"})
}