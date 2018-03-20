var controller = require("./../../controllers/fetch.js");
var articleController = require("./../../controllers/article.js");

module.exports = function(router) {
    //TO SCRAPE ARTICLES
    router.get("/scrape/", function(req, res) {
        controller.scrapeArticles();
        res.end();
    })
    //TO VIEW ALL ARTICLES
    router.get("/api/articles/", function(req, res) {
        articleController.displayAllAPI(res);
    })
    //TO OBTAIN ALL ARTICLES AVAILABLE TO USER (The ones that are not saved)
    router.get("/api/articlesAvailable/:username/", function(req, res) {
        articleController.findAvailableArticles(req.params.username, res);
    })
}