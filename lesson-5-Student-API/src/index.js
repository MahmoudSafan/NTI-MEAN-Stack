const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
require('../db/connection')
app.use(express.json())
const router = require('../routes/mainRoutes')

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(router)

module.exports = app