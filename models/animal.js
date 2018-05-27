var mongoose = require('mongoose')
var Schema = mongoose.Schema

var animalSchema = new Schema({
  name: {type: String, required: true, unique: true},
  number_of_legs: Number,
  cute: Boolean,
  created_at: Date,
  updated_at: Date
});

animalSchema.methods.become_cute = function() {
  this.name = "mega-cute-" + this.name
  return this.name
}

animalSchema.pre('save', function(next) {
  var current = new Date();
  this.updated_at = current

  if (!this.created_at) {
    this.created_at = current
  };

  next();
})

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
