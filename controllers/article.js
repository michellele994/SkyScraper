var db = require("./../models");

var scrapeIt = function(article) {
    db.Article.create(article).then(function(inserted) {
        return console.log(inserted);
    }).catch(function(err) {
        return console.log(err);
    });
}
var displayAllAPI = function(res) {
    db.Article.find()
    .then(function(dbArticle) {
        res.json(dbArticle);
    })
}
var findAvailableArticles = function(username, res) {
    db.User.findOne({username: username})
    .then(function(thisUser) {
        db.Article.find({})
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