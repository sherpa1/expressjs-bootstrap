const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const error_handler = require("./middlewares/error_handler");
const error_404_handler = require("./middlewares/error_404_handler");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// error 404 handler
app.use(error_404_handler);

// error handler
app.use(error_handler);

module.exports = app;
