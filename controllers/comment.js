var ObjectId = require('mongoose').Types.ObjectId;
var db = require("./../models");

//TO POST A COMMENT
var postComment = function(req, res) {
    db.Comment.create({
        username: req.body.username,
        articleId: req.body.articleId,
        title: req.body.commentTitle,
        body: req.body.commentBody
    }).then(function(inserted) {
        db.User.updateOne({username: req.body.username}, {$addToSet: {comment: inserted._id}})
        .then(function(updatedUser){
            db.Article.updateOne({_id: req.body.articleId}, {$addToSet: {comment: inserted._id}})
            .then(function(updatedArticle){
                res.end();
            })
            .catch(function(err){
                res.json(err);
            })
        })
        .catch(function(err) {
            console.log(err);
        })
    }).catch(function(err) {
        console.log(err);
    });
}
//TO DELETE A COMMENT
var deleteComment = function(req, res) {
    console.log(req.body.commentId);
        db.Article.update({}, {$pull:{comment: new ObjectId(req.body.commentId)}})
        .then(function(updatedArticle){
            db.User.update({}, {$pull:{comment: new ObjectId(req.body.commentId)}})
            .then(function(updatedUser){
                db.Comment.deleteOne({_id: req.body.commentId})
                .then(function(deleted) {
                    res.end();
                })
                .catch(function(err) {
                    console.log(err);
                })
            })
            .catch(function(err) {
                console.log(err);
            })

        })
        .catch(function(err){
            console.log(err);
        })
}
var displayAllComments = function(res) {
    db.Comment.find()
    .then(function(dbComment) {
        res.json(dbComment);
    })
    .catch(function(err) {
         res.json(err);
    })
}

module.exports = {
    postComment: postComment,
    displayAllComments: displayAllComments,
    deleteComment: deleteComment
}