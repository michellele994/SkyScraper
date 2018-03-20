$(function() {
    $("#home-button").on("click", function() {
        var userName = $(this).attr("data-username");
        window.location="/home/"+userName+"/";
    });
    $("#saved-articles-button").on("click", function() {
        var userName = $(this).attr("data-username");
        window.location="/savedArticles/"+userName+"/";
    });

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
            console.log("Comment had been posted")
        });
    });

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