const express = require('express')
const app = express()
require('dotenv').config()
require('../db/connection')
app.use(express.json())
const router = require('../routes/mainRoutes')

app.use(router)

module.exports = app