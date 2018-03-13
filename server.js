var express = require("express");
var bodyParser = require("body-parser");

// ============================================================
var PORT = process.env.PORT || 8080;
var app = express();

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + "/public"));

//set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: 'layout' }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/view/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
// require("./routes/posts-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
// });