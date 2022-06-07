var express = require('express');
var router = express.Router();

const jlist = require('../services/JList');

/* This is the cote to get the Jlist */
router.get('/', async function(req, res, next) {
  try{
      res.json(await jlist.getMultiple(req.query.page));
  } catch(err){
    /* Error Message */
    console.error('Error' + err.message);
    next(err);
  }
});

module.exports = router;