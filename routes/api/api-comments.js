var controller = require("./../../controllers/comment.js");
module.exports = function(router)
{
	//TO VIEW ALL COMMENTS
	router.get("/api/comments/", function(req, res) {
		controller.displayAllComments(res);
	});

	//WHEN NEW COMMENT IS BEING POSTED
	router.post("/api/comments/", function(req, res) {
		controller.postComment(req, res);
	});

	//WHEN COMMENT IS DELETED
	router.post("/api/comments/delete", function(req, res) {
		controller.deleteComment(req, res);
	});

}