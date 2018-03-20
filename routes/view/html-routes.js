var db = require("./../../models");
var controller = require("./../../controllers/article.js");
module.exports = function(router)
{
	//FOR LOGIN PAGE
	router.get("/", function(req, res) {
		res.render("login")
	});

	//FOR HOME PAGE (viewing scraped articles)
	router.get("/home/:username", function(req, res) {
		db.User.findOne({username: req.params.username})
	    .then(function(thisUser) {
	        db.Article.find({_id:{ $nin: thisUser.saved }})
	        .then(function(availableArticles) {
	        	var available = {
	        		thisUser: thisUser,
	        		availableArticles: availableArticles
	        	}
	            res.render("home", available)
	        })
	        .catch(function(err){
	            res.json(err);
	        })
	    })
	    .catch(function(err) {
	        res.json(err);
	    })
	});

	//FOR SAVED ARTICLES PAGE
	router.get("/savedArticles/:username", function(req, res) {
		db.User.findOne({username: req.params.username})
	    .then(function(thisUser) {
	        db.Article.find({_id:{ $in: thisUser.saved }})
	        .then(function(availableArticles) {
	        	var available = {
	        		thisUser: thisUser,
	        		availableArticles: availableArticles
	        	}
	            res.render("saved", available)
	        })
	        .catch(function(err){
	            res.json(err);
	        })
	    })
	    .catch(function(err) {
	        res.json(err);
	    })
	});

	//WHEN A USER VIEWS COMMENTS ON AN ARTICLE
	router.get("/article/:articleId/:username", function(req, res) {
		db.Article.findOne({_id: req.params.articleId})
		.then(function(thisArticle) {
			db.Comment.find({articleId: req.params.articleId})
			.then(function(dbComments){
				var articleInfo = {
					username: req.params.username,
					thisArticle:thisArticle,
					comments: dbComments
				}
				res.render("article", articleInfo);
			})
			.catch(function(err){
				res.json(err);
			})
		})
		.catch(function(err) {
			res.json(err);
		})
	});
}