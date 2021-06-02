const express = require('express')
const router= express.Router()
const Controller = require('../controllers/login')

router.get('/', Controller.login)
router.post('/', Controller.loginPost)




module.exports = router