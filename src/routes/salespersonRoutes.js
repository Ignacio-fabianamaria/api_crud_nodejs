const express = require('express')

const router = express.Router()

const salespersonController = require('../controller/salespersonController')

router.get('salesperson', salespersonController.getAll)

module.exports = router