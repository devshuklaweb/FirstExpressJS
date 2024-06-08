const mongoose = require("mongoose");
const commentsScheme = new mongoose.Schema({
    Name: String,
    age: Number,
    Address: String
  });


module.exports = mongoose.model('comments',commentsScheme);
