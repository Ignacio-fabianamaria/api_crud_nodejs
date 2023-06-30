const salespersonModel = require('../models/salespersonModel')

const getAll = async() =>{
const salesperson = salespersonController.getAll()
return salesperson
}

module.exports = {
    getAll,
}