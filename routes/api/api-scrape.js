var controller = require("./../../controllers/fetch.js");

module.exports = function(router) {
    router.get("/scrape", function(req, res) {
        controller.scrapeArticles();
    })
}