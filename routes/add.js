var express = require('express');
var router = express.Router();
var models = require('../models/');


router.get('/', function(req, res, next) {
	res.render('add', {title: 'Add Page'});
});

var urlTransform = function(input){
    
    if(input){
    return input.replace(/\s/g, "_")
    .replace (/\W/g,"0")
    }
    else{
        return Math.random().toString(36).substring(2,7);
    }
}


router.post('/submit', function(req, res) {

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
	var title = req.body.title;
	var content = req.body.content;
	var url_name = urlTransform(title) //add slashes if this is broken
  var tags = req.body.tags.split(",");

  var page = new models.Page({ title: title, content: content, url_name: url_name, tags: tags});
  page.save();
  res.redirect('/');
});

module.exports = router, urlTransform;
