var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var SavedArticleSchema = new Schema({
  // `title` is of type String
  title: {
    type: String,
      trim: true
  },
  link: {
    type: String,
      trim: true
  },
  summary: {
    type: String,
    trim: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var SavedArticle = mongoose.model("SavedArticle", SavedArticleSchema);

// Export the Note model
module.exports = SavedArticle;
