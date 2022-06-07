const mysql = require('mysql2/promise');
const config = require('../config');
/* this is cthe connection to the db */
async function query(sql,params){
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql,params);

    return results;
}

module.exports = {
    query
};