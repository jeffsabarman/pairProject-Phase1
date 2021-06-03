const express = require('express')
const router= express.Router()
const loginCheck = require('../middleware/loginCheck')
const home = require('./home')
const applicants = require('./applicants')
const interviewers = require('./interviewers')
const login = require('./login')
const logout = require('./logout')

router.use('/', home)
router.use('/login', login)
router.use('/logout', logout)
router.use(loginCheck)
router.use('/applicants', applicants)
router.use('/interviewers', interviewers)

module.exports = router