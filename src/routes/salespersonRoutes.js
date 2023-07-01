const express = require('express')
const salespersonController = require('../controller/salespersonController')

const router = express.Router()


router.get('/', salespersonController.getAll)
router.post('/', salespersonController.create)

module.exports = router