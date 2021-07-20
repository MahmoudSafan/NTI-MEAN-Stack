const express = require('express')
const router = express.Router()
const studentCtrl = require('../controller/mainCtrl') 

router.post('/addStudent',studentCtrl.addStudent)
router.post('/login',studentCtrl.login)
router.post('/deleteUser',studentCtrl.deleteStudent)
router.get('/students',studentCtrl.showAllStudents)
router.get('/students/:userId',studentCtrl.showSingleStudent)

router.post('/addCourse',studentCtrl.addCourse)

module.exports = router
