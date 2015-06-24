var express = require('express');
var router = express.Router();
var models = require('../models/');


router.get('/:urlName', function(req,res){
	console.log("Loading");
	var url = req.params.urlName;
	models.Page.findOne({url_name: url}, function(err,data){
			console.log(data);

		res.render('pages',{title: data.title, content: data.content})
	})
})

router.get('/:urlName/edit', function(req, res) {
	var url = req.params.urlName;
	models.Page.findOne({url_name: url}, function(err,data){
		console.log(data.content)
		res.render('edit', {title: 'Edit Page', content: data.content, pageTitle: data.title});
	})
})

router.post('/:urlName/edit/submit', function(req, res) {

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
	var title = req.body.title;
	var content = req.body.content;
	var url_name = urlTransform(title) //add slashes if this is broken

  models.Page.update({url_name: url},{ 'title': title, 'content': content, 'url_name': url_name });
  res.redirect('/');
});

module.exports = router;

//