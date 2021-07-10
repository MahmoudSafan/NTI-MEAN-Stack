const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/ctrl')

router.get('/:langId',articleCtrl.allArticals);

router.get('/:articleId/:langId',articleCtrl.singleArticle)

module.exports = router