var express = require('express');
var router = express.Router();

/* With this lines we wil get the users listing */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render("list",{title :" Si funciono :D "});
});

module.exports = router;
