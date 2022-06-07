var express = require('express');
var router = express.Router();

/* We want to send a message in this index */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: "wnas noshes,si les llego el mensaje? xD"});
});

module.exports = router;
