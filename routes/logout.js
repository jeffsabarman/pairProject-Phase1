const express = require('express')
const router= express.Router()
const Controller = require('../controllers/logout')

router.get('/', Controller.logout)

module.exports = router