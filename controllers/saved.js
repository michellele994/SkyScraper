var db = require("./../models");

//TO FIND ALL SAVED ARTICLES
var findAllSaved = function(res) {
    db.SavedArticle.find()
    .then(function(dbSaved){
        res.json(dbSaved);
    })
    .catch(function(err){
        return res.json(err);
    })
}

//TO SAVE AN ARTICLE
var saveTheArticle = function(username, req, res) {
        db.AllArticle.findOne({_id: req.body.articleId})
        .then(function(thisArticle){
            db.SavedArticle.create({
                _id: thisArticle._id,
                title: thisArticle.title,
                link: thisArticle.link,
                summary: thisArticle.summary
            }).then(function(inserted) {
                res.json(inserted);
            }).catch(function(err) {
                return res.json(err);
            });
        })
}
module.exports = {
    findAllSaved: findAllSaved,
    saveTheArticle: saveTheArticle
}
