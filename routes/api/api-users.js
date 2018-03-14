var db = require("./../../models");
module.exports = function(router)
{
	router.get("/api/users/", function(req, res) {
			db.User.find()
			.then(function(dbUsers) {
				res.json(dbUsers);
			})
			.catch(function(err){
				res.json(err);
			});
	});
	router.post("/api/users/", function(req, res) {
		db.User.create(req.body)
		.then(function(dbUser) {
			res.json(dbUser);
		})
		.catch(function(err){
			res.json(err);
		});
	});
}