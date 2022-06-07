const db = require('./db');
const helper = require('../helper');
const config = require('../config');
/* We willput the Jlist here */
async function getMultiple(page = 1){
    /* here we wil insert the information in the database: */
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id, username, password, email, role
        FROM jlist LIMIT ${offset},${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows)
    const meta = {page};
    
    return {
        data,
        meta
    }
}

module.exports = {
    getMultiple
}