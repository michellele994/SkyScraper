var controller = require("./../../controllers/user.js");
module.exports = function(router)
{
	//TO VIEW ALL USERS
	router.get("/api/users/", function(req, res) {
		controller.allUsers(res);
	});
	//TO VIEW ONE USER
	router.get("/api/users/:username", function(req, res) {
		controller.oneUser(req.params.username, res);
	});
	//TO MAKE A NEW USER
	router.post("/api/users/", function(req, res) {
		controller.createUser(req, res);
	});
	//TO SAVE ARTICLES
	router.post("/api/users/:username", function(req, res) {
        controller.saveTheArticle(req.params.username, req, res);
    })
}