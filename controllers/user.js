var db = require("./../models");

//TO FIND ALL USERS
var allUsers = function(res) {
    db.User.find()
    .then(function(dbUser){
        res.json(dbUser);
    })
    .catch(function(err){
        return res.json(err);
    })
}

//TO FIND ONE USER
var oneUser = function(username, res) {
	db.User.findOne({username: username})
	.then(function(thisUser){
		res.json(thisUser);
	})
	.catch(function(err){
        return res.json(err);
    })
}

//TO CREATE A USER
var createUser = function(req, res) {
	db.User.create(req.body).then(function(inserted) {
        res.end();
    }).catch(function(err) {
        return console.log(err);
    });
}

//TO SAVE AN ARTICLE
var saveTheArticle = function(username, req, res) {
    db.User.updateOne({username: username}, {$addToSet: {saved: req.body.articleId}})
    .then(function(thisUser){
        console.log("saving had occured");
        res.end();
    })
    .catch(function(err) {
        return console.log(err);
    })
}

module.exports = {
    allUsers: allUsers,
    oneUser: oneUser,
    createUser: createUser,
    saveTheArticle: saveTheArticle
}
