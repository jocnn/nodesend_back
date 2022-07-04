const Links = require('../models/linksModel')
const shortid = require('shortid')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

exports.newLink = async (req, res, next) => {

  const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
  }
  
	const { name_origin } = req.body

	const link = new Links()
	link.url = shortid.generate()
	link.name = shortid.generate()
	link.name_origin = name_origin
	link.downloads = 1

	if (req.user) {
		const { password, downloads } = req.body

		if (downloads) {
			link.downloads = downloads
		}

		if (password) {
			const salt = await bcrypt.genSalt(10)
			link.password = await bcrypt.hash(password, salt)
		}

		link.author = req.user.id
	}

	try {
		await link.save()
		res.json({ msg: `${link.url}` })
		return next()
	} catch (error) {
		console.log(error)
	}
}
