var marked = require('marked');

module.exports = function(swig) {
  var page_link = function (doc) {
    var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='"+doc.full_route+"'>"+link_name+"</a>";
  };
  page_link.safe = true;

  var marker = function (body) {
  	return marked(body)
  }
  marker.safe = true;

  swig.setFilter('markFilter', marker)

  swig.setFilter('page_link', page_link);

};


//figure out doc|page link url generation?

//figure out page routing??