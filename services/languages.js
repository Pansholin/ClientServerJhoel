const db = require('./db');
const helper = require('../helper');
const config = require('../config');
/* Languages: */
async function getMultiple(page = 1){
    /* We use practicly the same code like in Jlist: */
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, description, year
        FROM languages LIMIT ${offset},${config.listPerPage}
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