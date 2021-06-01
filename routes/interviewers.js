const express = require('express')
const router= express.Router()
const Controller = require('../controllers/interviewers')

router.get('/', Controller.showInterviewers)

router.get('/add', Controller.add)
router.post('/add', Controller.addPost)

router.get('/edit/:id', Controller.edit)
router.post('/edit/:id', Controller.editPost)

router.get('/delete/:id',  Controller.delete) // belum ada konfimrasi buat delte


module.exports = router

