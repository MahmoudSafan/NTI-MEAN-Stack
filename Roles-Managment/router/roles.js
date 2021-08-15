const router = require('express').Router()
const roleCtrl = require('../controller/roles')

router.post('/addRole' ,roleCtrl.addRole)


router.get('/allRoles' , roleCtrl.allRoles)

module.exports  = router