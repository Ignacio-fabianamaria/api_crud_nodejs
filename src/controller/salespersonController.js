const salespersonService = require('../services/salespersonService')

const getAll = async(req, res)=> {
const salesperson = await salespersonService.getAll();
res.status(200).json(salesperson)
}

const create = async(req, res) => {
    try {
        const { first_name, last_name, date_of_birth, email, password } = req.body;
        const newSalesperson = await salespersonService.create(
          first_name,
          last_name,
          date_of_birth,
          email,
          password);
        res.status(201).json(newSalesperson);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create salesperson.' });
      }
}

module.exports = {
    getAll,
    create
}