const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const reviewsList = require('./routes/list')

const PORT = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/reviews', reviewsList)

mongoose.connect(process.env.DB_CONNECTION, ()=>console.log('DB On'))

app.listen(PORT, ()=>console.log('Server ...'))