var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `title` is of type String
  name: {
  	type: String,
  	trim: true,
  	required: "Name is required"
  },
  username: {
  	type: String,
  	trim: true,
  	required: "Username is required",
  	unique: true
  },
  password: {
  	type: String,
  	trim: true,
  	required: "Password is required",
  	validate: [
		function(input) {
			return input.length >= 6
		},
		"Password should be longer"
  	]
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;
