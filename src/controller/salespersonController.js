const salespersonService = require('../services/salespersonService')
const bcrypt = require('bcrypt')

const getAll = async(req, res)=> {
const salesperson = await salespersonService.getAll();
res.status(200).json(salesperson)
}

const create = async(req, res) => {
    try {
        const { first_name, last_name, date_of_birth, email, password } = req.body;
        const hashPassword = await bcrypt.hash(password,10)
        const newSalesperson = await salespersonService.create(
          first_name,
          last_name,
          date_of_birth,
          email,
          hashPassword);
        console.log("🚀 ~ file: salespersonController.js:19 ~ create ~ newSalesperson:", newSalesperson)
        res.status(201).json(newSalesperson);
      } catch (error) {
        console.error('Erro ao criar salesperson:', error);
        res.status(500).json({ error: 'Failed to create salesperson.' });
      }
}

module.exports = {
    getAll,
    create
}