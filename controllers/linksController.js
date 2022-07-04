const Links = require('../models/linksModel')
const shortid = require('shortid')

exports.newLink = async (req, res, next) => {
	const { name_origin, password } = req.body

  const link = new Links()
  link.password = password
	link.url = shortid.generate()
  link.name = shortid.generate()
  link.name_origin = name_origin
  link.downloads = 1

	// console.log(link)

  try {
    await link.save()
    res.json({ msg: `${link.url}` })
    return next()
  } catch (error) {
    console.log(error)
  }
}
