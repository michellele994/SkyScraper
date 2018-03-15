var request = require("request");
var cheerio = require("cheerio");
var db = require("./../models");
var controller = require("./headline.js");
var scrapeArticles = function(){
    //I learned this here: https://stackoverflow.com/questions/44265888/get-links-with-cheerio-issue-nodejs
    var customHeaderRequest = request.defaults({
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'}
    });
    customHeaderRequest.get("https://www.accuweather.com/en/weather-news", function(err, resp, html) {
    //learned about whitespace through cheerio documentation
        var $ = cheerio.load(html,{normalizeWhitespace: true});
        var results = [];
        $("ul.articles").each(function(i, element) {

            var title = $(element).find("a").text();
            var link = $(element).find("a").attr("href");
            var summary = $(element).find("p").text();
            if (title && link && summary) {
                var article = {
                    title: title,
                    link: link,
                    summary: summary
                }
                controller.scrapeIt(article);
            }
        });
    });
}

module.exports = {
    scrapeArticles: scrapeArticles
}