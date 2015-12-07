'use strict';

var express = require('express');
var controller = require('./krc.controller');

var router = express.Router();

router.get('/:word', controller.index);

router.get('/', function(req, res){
  res.status(400).end('Wrong input');
  console.log('Wrong input');
});

router.get('/strp', function(req, res){
  res.status(200);
  console.log('Hello');
});


module.exports = router;
