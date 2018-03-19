var controller = require("./../../controllers/fetch.js");
var articleController = require("./../../controllers/article.js");

module.exports = function(router) {
    router.get("/scrape/", function(req, res) {
        controller.scrapeArticles();
        res.end();
    })
    router.get("/api/articles/", function(req, res) {
        articleController.displayAllAPI(res);
    })
    router.get("/api/articlesAvailable/:username/", function(req, res) {
        articleController.findAvailableArticles(req.params.username, res);
    })
}