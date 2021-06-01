const express = require('express')
const router= express.Router()
const Controller = require('../controllers/applicants')

router.get('/', Controller.showApplicants)

router.get('/add', Controller.add)
router.post('/add', Controller.addPost)

router.get('/edit/:id', Controller.edit)
router.post('/edit/:id', Controller.editPost)

router.get('/delete/:id',  Controller.delete) // belum ada konfimrasi buat delte

router.get('/schedule/:id', Controller.scheduling)


module.exports = router


