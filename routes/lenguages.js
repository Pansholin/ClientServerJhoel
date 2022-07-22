const { request } = require('express');
var express = require('express');
var router = express.Router();

const lenguages =  require("../services/lenguages");

/* GET lenguages listing. */
router.get('/', async function(req, res, next) {
 try {
     res.json(await lenguages.getMultiple(req.query.page));
 } catch (error) {
     console.error('Error'+error.message);
     next(error);
 }
});

//POST MAN OPTIONS

//CODE TO CREATE A REGISTER ON THE DATA BASE
router.post('/', async function(req,res,next){
    try {
        res.json(await lenguages.create(req.body));
    } catch (error) {
        console.log('Error while creating a lenguage'+error.message);
        next(error);
    }
});

//CODE FOR UPDATE A REGISTER ON THE DATA BASE
//WHEN WE WRITE ID IN THE RUTE ON THE BROWSER IT TAKES THE VALUE
router.put('/:id', async function(req,res,next){
    try {
        res.json(await lenguages.update(req.params.id, req.body));//WE TAKE THE DATE OF ID AND THE OTHER TO CHANGE
    } catch (error) {
        console.log('Error while updating a lenguage'+error.message);
        next(error);
    }
});

//CODE FOR DELETE A REGISTER ON THE DATA BASE
router.delete('/:id', async function(req,res,next){
    try {
        res.json(await lenguages.remove(req.params.id));//WHIT THIS COMAND TAKE THE DATE OF ID FOR IT USE
    } catch (error) {
        console.log('Error while deleting a lenguage'+error.message);
        next(error);
    }
});

module.exports = router;
