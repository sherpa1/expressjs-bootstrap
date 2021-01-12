const express = require('express');
const router = express.Router();
const createError = require('http-errors');


router.get('/', function (req, res, next) {
  res.json({ message: 'Bienvenue sur le projet Express.js Bootstrap' })
});

router.get('/error', function (req, res, next) {

  try {
    console.log(test);
  } catch (error) {
    throw new Error("This is an error !")
  }

});

module.exports = router;
