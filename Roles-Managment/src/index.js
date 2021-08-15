const express = require('express')
const cors = require('cors')
require('../modules/DBconnection')
require('dotenv').config()

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

module.exports = app