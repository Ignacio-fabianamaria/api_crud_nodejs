const {connection} = require('../db/connection')

const getAll = async()=>{
    const query = 'SELECT *  FROM customerManagement.salesperson'
    const salesperson = await connection.execute(query)
    return salesperson
}