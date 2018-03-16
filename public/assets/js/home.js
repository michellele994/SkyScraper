$(function() {
    //WHEN USER PRESSES SCRAPE BUTTON
    $("#scrape-button").on("click", function() {
        $.get("/scrape").then(function(response){
            console.log("HALLO");
            $.get("/api/articles/").then(function(resArticles) {
                for (var i = 0; i < resArticles.length; i++)
                {
                    var article = $("<div>");
                    $(article).addClass("article");
                    $(article).append("<br><a href='"+resArticles[i].link+"'><div class='article-title'>"+resArticles[i].title+"</div></a>");
                    $(article).append("<br><div class='article-summary'>"+resArticles[i].summary+"</div><br>");
                    $("#articles-place").append(article);
                    $("#articles-place").append("<br>");
                    var buttons = $("<div>");
                    $(buttons).addClass("buttons");
                    $(buttons).append("<button class='save-button' data-articleId='"+resArticles[i]._id+"'>Save</button>");
                    $("#articles-place").append(buttons);

                }
            })
        });
    });

    //WHEN USER PRESSES A SAVE BUTTON
    $("#articles-place").on("click", ".save-button", function() {
        var articleId = $(this).attr("data-articleId");
        $.ajax("/api/savedArticles/", {
            type: "POST",
            data: {
                articleId: articleId
            }
        });
    });
})