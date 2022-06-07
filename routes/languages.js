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

module.exports = router;