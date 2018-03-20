$(function() {


    //WHEN USER PRESSES HOME BUTTON
    $("#home-button").on("click", function() {
        var userName = $(this).attr("data-username");
        window.location="/home/"+userName+"/";
    });
    //WHEN USER PRESSES SAVED ARTICLES BUTTON
    $("#saved-articles-button").on("click", function() {
        var userName = $(this).attr("data-username");
        window.location="/savedArticles/"+userName+"/";
    });

    //WHEN USER PRESSES TO POST COMMENT
    $("#comment-button").on("click", function() {
        var articleId = $(this).attr("data-articleId");
        var userName = $(this).attr("data-username");
        var commentTitle = $("#input-comment-title").val().trim();
        var commentBody = $("#input-comment-body").val().trim();
        $.ajax("/api/comments/", {
            type: "POST",
            data: {
                username: userName,
                articleId: articleId,
                commentTitle: commentTitle,
                commentBody: commentBody
            }
        }).then(function(){
            location.reload();
        });
    });

    //WHEN A USER PRESSES TO DELETE A COMMENT
    $(".delete-comment").on("click", function() {
        var articleId = $(this).attr("data-articleId");
        var userName = $(this).attr("data-username");
        var commentId = $(this).attr("data-commentId");
        console.log("This is pressed");
        $.ajax("/api/comments/delete", {
            type: "POST",
            data: {
                commentId: commentId,
                articleId: articleId,
                userName: userName
            }
        }).then(function(){
            location.reload();
        });
    });
})