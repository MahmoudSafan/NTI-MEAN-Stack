const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('../db/connection')

const app = express()
app.use(express.json())
const router = require('../routes/mainRoutes')

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(router)

module.exports = app