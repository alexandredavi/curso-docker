var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var newUserRouter = require('./routes/new-user');
var getUserRouter = require('./routes/get-user');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/new-user', newUserRouter);
app.use('/user', getUserRouter);

module.exports = app;
