const db = require('./db');
const helper = require('../helper');
const config = require('../config');


// THIS CODE SHOWS THE DATA WHERE WE DON´T USE POSTMAN FOR THE LENGUAGES TABLE
async function getMultiple(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id,name,description,year
        FROM languages LIMIT ${offset},${config.listPerPage}
        `
        );
        const data = helper.emptyOrRows(rows);
        const meta = (page);
        return {
            data,meta
    }
}
// THIS CODE SHOWS THE DATA WHERE WE DON´T USE POSTMAN FOR THE USERS TABLE

async function getUser(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT id,username,password,email,role
        FROM users LIMIT ${offset},${config.listPerPage}
        `
        );
        const data = helper.emptyOrRows(rows);
        const meta = (page);
        return {
            data,meta
    }
}

//THIS CODE ADD A REGISTER WHIT POSTMAN
async function create(lenguage){
    console.log(`INSERT INTO lenguages (name,description,year) VALUES 
    ('${lenguage.name}','${lenguage.description}',${lenguage.year})`);

    const result = await db.query(
    `INSERT INTO lenguages (name, description, year) VALUES ('${lenguage.name}','${lenguage.description}',${lenguage.year})`
    );
    
    let message = "Error in creating programing lenguage";
    if(result.affectedRows){
        message = "A new lenguage has been added";
    }
    return{message}
}


// THIS CODE UPDATE A REGISTER USING POSTMAN
async function update(id,lenguage){
    const result = await db.query(
        `UPDATE lenguages 
        SET 
        name = '${lenguage.name}', 
        description = '${lenguage.description}', 
        year = ${lenguage.year}
        WHERE id= ${id}
        `
    );
 
    let message = "Error in updateing a programming language";
    if (result.affectedRows){
        message = "A language has been updated!";
    }
 
    return {message}
 }

async function remove(id){
    
    const result = await db.query(
        `DELETE FROM lenguages WHERE id = ${id}`
    );
    
    let message = "Error in delete programing lenguage";
    if(result.affectedRows){
        message = "The date was update";
    }
    return{message}
}

module.exports = {
    getMultiple,
    getUser,
    create,
    update,
    remove
};
