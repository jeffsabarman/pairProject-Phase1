const express = require('express')
const router= express.Router()
const home = require('./home')
const applicants = require('./applicants')
const interviewers = require('./interviewers')

router.use('/', home)
router.use('/applicants', applicants)
router.use('/interviewers', interviewers)


module.exports = router