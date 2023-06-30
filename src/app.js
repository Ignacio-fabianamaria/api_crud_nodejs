const express = require('express')

const app = express()
app.use(express.json())

const salespersonRoutes = require('./routes/salespersonRoutes');

app.use('/salesperson', salespersonRoutes)

module.exports = app