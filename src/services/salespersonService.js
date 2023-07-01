const salespersonModel = require('../models/salespersonModel')

const getAll = async() =>{
const salesperson = await salespersonModel.getAll()
return salesperson
}

const create = async() => {
   
}

module.exports = {
    getAll,
    create
}