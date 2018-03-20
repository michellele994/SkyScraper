var controller = require("./../../controllers/comment.js");
module.exports = function(router)
{
	router.get("/api/comments/", function(req, res) {
		controller.displayAllComments(res);
	});
	// router.get("/api/users/:username", function(req, res) {
	// 	controller.oneUser(req.params.username, res);
	// });
	router.post("/api/comments/", function(req, res) {
		controller.postComment(req, res);
	});
	router.post("/api/comments/delete", function(req, res) {
		controller.deleteComment(req, res);
	});
	// router.post("/api/users/:username", function(req, res) {
 //        controller.saveTheArticle(req.params.username, req, res);
 //    })
}