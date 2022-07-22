const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getComments(id){
    const rows = await db.query(
        `SELECT id, comment, user, idpost
         FROM comments 
         WHERE idpost= ${id} 
        `
    );
    const data = helper.emptyOrRows(rows);

    return{
        data
    }
 }

// THIS CODE SHOWS THE DATA WHERE WE DON´T USE POSTMAN FOR THE USERS TABLE


module.exports = {
    getComments
};
