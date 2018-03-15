var db = require("./../models");

var scrapeIt = function(article) {
    db.Headline.create(article).then(function(inserted) {
        console.log(inserted);
    }).catch(function(err) {
        return console.log(err);
    });
}
var displayAllAPI = function(res) {
    db.Headline.find()
    .then(function(dbHeadline) {
        return res.json(dbHeadline);
    })
    .catch(function(err){
        res.json(err);
    })
}
module.exports = {
    scrapeIt: scrapeIt,
    displayAllAPI: displayAllAPI
}