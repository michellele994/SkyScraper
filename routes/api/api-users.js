var controller = require("./../../controllers/user.js")
module.exports = function(router)
{
	router.get("/api/users/", function(req, res) {
		controller.allUsers(res);
	});
	router.get("/api/users/:username", function(req, res) {
		controller.oneUser(req.params.username, res);
	});
	router.post("/api/users/", function(req, res) {
		controller.createUser(req, res);
	});
}