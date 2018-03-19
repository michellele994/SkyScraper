$(function() {
    // //Extract unique username from the URL
    var userInfo = window.location.pathname.substr(1, window.location.pathname.length);
    userInfo = userInfo.substr(userInfo.indexOf("/") + 1, userInfo.length);
    if (userInfo.indexOf("/") !== -1) {
        var userName = userInfo.substr(0, userInfo.indexOf("/"));
    } else {
        userName = userInfo;
    }
    
    //WHEN USER PRESSES SCRAPE BUTTON
    $("#scrape-button").on("click", function() {
        $.get("/scrape").then(function(response){
            $.get("/api/articlesAvailable/"+userName).then(function(resArticles) {
                console.log("HALLO");
                $("#articles-place").empty();
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
        $.ajax("/api/users/"+userName, {
            type: "POST",
            data: {
                articleId: articleId
            }
        }).then(function(){
            console.log("This has been saved")
        });
    });
})