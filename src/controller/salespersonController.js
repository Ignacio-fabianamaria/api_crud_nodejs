const salespersonService = require('../services/salespersonService')

const getAll = async(req, res)=> {
const salesperson = await salespersonController.getAll();
res.status(200).json(salesperson)
}

module.exports = {
    getAll,
}