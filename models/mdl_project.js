var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  excerpt: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: Array
  },
  tags: {
    type: Array
  },
  technology: {
    type: Array
  },
});
