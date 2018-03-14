var db = require("./../../models");
module.exports = function(router)
{
	router.get("/", function(req, res) {
		res.render("login")
	});
	router.get("/home/:username", function(req, res) {
		db.User.findOne({username: req.params.username})
		.then(function(dbUser)
		{
			var renderUser = {
				dbUser: dbUser
			}
			res.render("home", renderUser)
		})
	});
}