var controller = require("./../../controllers/fetch.js");
var headlineController = require("./../../controllers/headline.js");

module.exports = function(router) {
    router.get("/scrape", function(req, res) {
        controller.scrapeArticles();
    })
    router.get("/api/articles", function(req, res) {
        headlineController.displayAllAPI(res);
    })
}