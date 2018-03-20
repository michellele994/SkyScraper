var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// ============================================================
var PORT = process.env.PORT || 8080;
var app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));

var databaseUri = "mongodb://localhost/homeworkSkyScraper";

if(process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
}
else {
	mongoose.connect(databaseUri);
}

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: 'layout' }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/view/html-routes.js")(app);
require("./routes/api/api-users.js")(app);
require("./routes/api/api-scrape.js")(app);
require("./routes/api/api-comments.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});