var db = require("./../models");

//TO SCRAPE ARTICLES
var scrapeIt = function(article) {
    db.Article.create(article).then(function(inserted) {
        return console.log(inserted);
    }).catch(function(err) {
        return console.log(err);
    });
}

//TO DISPLAY ALL ARTICLES
var displayAllAPI = function(res) {
    db.Article.find()
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
}

//TO FIND ALL AVAIALBLE ARTICLES FOR USER
var findAvailableArticles = function(username, res) {
    db.User.findOne({username: username})
    .then(function(thisUser) {
        db.Article.find({_id:{ $nin: thisUser.saved }})
        .then(function(availableArticles) {
            res.json(availableArticles);
        })
        .catch(function(err){
            res.json(err);
        })
    })
    .catch(function(err) {
        res.json(err);
    })
}
module.exports = {
    scrapeIt: scrapeIt,
    displayAllAPI: displayAllAPI,
    findAvailableArticles: findAvailableArticles
}