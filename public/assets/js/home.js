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
                //Reload the page after some time
                setTimeout(function() {
                    location.reload();
                }, 1000);
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
            location.reload();
        });
    });
})