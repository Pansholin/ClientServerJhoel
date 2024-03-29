var express = require('express');
var router = express.Router();

const languages = require('../services/languages');

/* With this code we will call the languages */
router.get('/', async function(req, res, next) {
  try{
      res.json(await languages.getMultiple(req.query.page));
  } catch(err){
     /* Error Message */
    console.error('Error' + err.message);
    next(err);
  }
});

router.post('/', async function(req,res,next){
  try{
    res.json(await languages.create(req.body));
  } catch (error) {
    console.log('Error while creating a language', error.message);
    next(error);
  }
});

router.put('/:id', async function(req,res,next){
  try{
    res.json(await languages.update(req.params.id, req.body));
  } catch (error) {
    console.log('Error while updating a language', error.message);
    next(error);
  }
});

router.delete('/:id', async function(req,res,next){
  try{
    res.json(await languages.remove(req.params.id));
  } catch (error) {
    console.log('Error while deleting a language', error.message);
    next(error);
  }
});

module.exports = router;