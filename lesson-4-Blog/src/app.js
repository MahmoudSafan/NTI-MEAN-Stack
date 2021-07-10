const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const router = require('../routes/routers')

app.set('view engine','ejs')
app.set('views','template')

app.use(express.static(path.join(__dirname,'../views')))

app.use(router)

module.exports = app