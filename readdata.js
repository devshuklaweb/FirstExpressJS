const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/devdb");
//define tha validation so other type of value not accept
const commentsScheme = new mongoose.Schema({
  Name: String,
  age: Number,
  Address: String
});

const readInDB = async () => {
  const comments = mongoose.model("comments", commentsScheme);
  let result = await comments.find();
  console.log(result);
}

readInDB();