$(function() {
    //WHEN USER PRESSES SCRAPE BUTTON
    $("#scrape-button").on("click", function() {
        $.get("/scrape").then(function(response){
            console.log("testasdf: "+ response);
        });
    })
})