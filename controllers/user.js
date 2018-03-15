var db = require("./../models");
var allUsers = function(res) {
    db.User.find()
    .then(function(dbUsers) {
        res.json(dbUsers);
    })
    .catch(function(err){
        return res.json(err);
    });
}
var oneUser = function(username, res) {
    db.User.findOne({username: username})
    .then(function(dbUsers) {
        res.json(dbUsers);
    })
    .catch(function(err){
        return res.json(err);
    });
}
var createUser = function(req, res) {
    db.User.create(req.body)
    .then(function(dbUser) {
        res.json(dbUser);
    })
    .catch(function(err){
        return res.json(err);
    });
}

module.exports = {
    allUsers: allUsers,
    oneUser: oneUser,
    createUser: createUser
}