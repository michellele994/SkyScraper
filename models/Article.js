var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  title: {
  	type: String,
    trim: true
  },
  link: {
  	type: String,
    trim: true,
    unique: true
  },
  summary: {
  	type: String,
  	trim: true
  },
  comment: []
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Note model
module.exports = Article;
