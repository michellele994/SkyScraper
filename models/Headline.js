var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var HeadlineSchema = new Schema({
  // `title` is of type String
  title: {
  	type: String,
      trim: true,
      unique: true
  },
  link: {
  	type: String,
      trim: true,
      unique: true
  },
  summary: {
  	type: String,
  	trim: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("Headline", HeadlineSchema);

// Export the Note model
module.exports = User;
