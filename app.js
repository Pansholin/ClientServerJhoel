/* First work */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var languagesRouter = require('./routes/languages');
var jlistRouter = require('./routes/JList');


var app = express();

let test = "git";
/* We use pug here */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* Format with .css */
app.use('/css',express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/languages', languagesRouter);
app.use('/users/json_list', jlistRouter);

/* First test */
app.get("/test",(request,response)=>{
  response.send("Probando probando 1 2.... 1 2 probando si si...");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
