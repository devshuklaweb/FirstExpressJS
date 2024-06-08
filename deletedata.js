const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/devdb");
//define tha validation so other type of value not accept
const commentsScheme = new mongoose.Schema({
  Name: String,
  age: Number,
  Address: String
});

const deleteInDB = async () => {
  const comments = mongoose.model("comments", commentsScheme);
  let result = await comments.deleteOne({Name: 'Deeraj1'});
  console.log(result, "result after delete operation perform");
}

deleteInDB();