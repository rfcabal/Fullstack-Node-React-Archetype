const express = require('express');
const indexRouter = require('./views/home');
const notFoundRouter = require('./specials');

const router = express.Router();

router.use('/', indexRouter);
router.use('/', notFoundRouter);


module.exports = router;
