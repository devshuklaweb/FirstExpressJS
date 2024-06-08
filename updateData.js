const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/devdb");
//define tha validation so other type of value not accept
const commentsScheme = new mongoose.Schema({
  Name: String,
  age: Number,
  Address: String
});

const updateInDB = async () => {
  const comments = mongoose.model("comments", commentsScheme);
  let result = await comments.updateOne(
    {Name: 'Deeraj1'},
    {
      $set: {age: 23, Address: "Rawan2" }
    }
  );
  console.log(result, "result after update operation perform");
}

updateInDB();