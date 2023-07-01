const connection = require("../db/connection");

const getAll = async () => {
  const query = "SELECT * FROM salesperson";
  const [rows] = await connection.execute(query)
  return rows;
};

const create = async () => {
    
};

module.exports = {
  getAll,
  create
};
