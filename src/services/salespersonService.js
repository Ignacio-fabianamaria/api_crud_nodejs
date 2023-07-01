const salespersonModel = require('../models/salespersonModel')

const getAll = async() =>{
const salesperson = await salespersonModel.getAll()
return salesperson
}

const create = async(first_name, last_name, date_of_birth, email, password) => {
    const newSalesperson = await salespersonModel.create(
      first_name,
      last_name,
      date_of_birth,
      email,
      password
      );
  return newSalesperson;
}

module.exports = {
    getAll,
    create
}