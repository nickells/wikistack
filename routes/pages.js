var express = require('express');
var router = express.Router();
var models = require('../models/');
var urlTransform = require('./add')

router.get('/:urlName', function(req,res){
	console.log("Loading");
	var url = req.params.urlName;
	models.Page.findOne({url_name: url}, function(err,data){
			console.log(data);

		res.render('pages',{title: data.title, content: data.content, url: data.url_name})
	})
})

router.get('/:urlName/edit', function(req, res) {
	var url = req.params.urlName;
	models.Page.findOne({url_name: url}, function(err,data){
		console.log(data)
		res.render('edit', {title: 'Edit Page', pageTitle: data.title, content: data.content, url: data.url_name});
	})
})

router.post('/:urlName/edit/submit', function(req, res) {

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
	var title = req.body.title;
	var content = req.body.content;
	var url = req.params.urlName;


  models.Page.findOneAndUpdate({url_name: url},{ title: title, content: content}, function(err, data){
  	res.redirect('/');	
  });
});

module.exports = router;

//