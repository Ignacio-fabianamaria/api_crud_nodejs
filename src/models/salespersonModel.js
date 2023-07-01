const connection = require("../db/connection");

const getAll = async () => {
  const query = "SELECT * FROM salesperson";
  const [rows] = await connection.execute(query)
  return rows;
};

const create = async (first_name, last_name, date_of_birth, email, password) => {
  const query = `INSERT INTO salesperson (first_name, last_name, date_of_birth, email, password)
  VALUES (?, ?, ?, ?, ?)`
  const [result] = await connection.execute(
    query,
    [
      first_name,
      last_name,
      date_of_birth,
      email,
      password
    ]
    )
  return { id: result.insertId, first_name, last_name, date_of_birth, email };
};

module.exports = {
  getAll,
  create
};
