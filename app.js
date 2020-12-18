var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.use(function(err, req, res, next) {
  res.status(500);
  res.render('error');
});

module.exports = app;
