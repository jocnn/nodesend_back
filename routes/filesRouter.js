const express = require('express')
const router = express.Router()
const filesController = require('../controllers/filesController')
const auth = require('../middleware/authMiddleware')

router.post('/', auth, filesController.uploadFile)

module.exports = router
