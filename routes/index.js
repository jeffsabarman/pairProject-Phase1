const express = require('express')
const router= express.Router()
const loginCheck = require('../middleware/loginCheck')
const home = require('./home')
const applicants = require('./applicants')
const interviewers = require('./interviewers')
const login = require('./login')

router.use('/', home)
router.use('/login', login)
// router.use(loginCheck)
router.use('/applicants',loginCheck, applicants)
router.use('/interviewers',loginCheck, interviewers)

module.exports = router