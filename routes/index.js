var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */



router.get('/', function(req, res, next) {
	models.Page.find(function(err,pages){
		console.log(pages);
		res.render('index', { title: 'Wikistack' ,docs: pages});
	})
  });





module.exports = router;
