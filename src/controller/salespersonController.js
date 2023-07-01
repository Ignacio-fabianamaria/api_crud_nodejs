const salespersonService = require('../services/salespersonService')

const getAll = async(req, res)=> {
const salesperson = await salespersonService.getAll();
res.status(200).json(salesperson)
}

const create = async(req, res) => {
}

module.exports = {
    getAll,
    create
}