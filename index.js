const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/devdb");
  //define tha validation so other type of value not accept
  const commentsScheme = new mongoose.Schema({
    Name: String,
    age: Number,
    Address: String
  });
  const commentsModel = mongoose.model("comments",commentsScheme);
  let data = new commentsModel({
    Name: "Deeraj",
    age: 22,
    Address: "Rawan"
  });
  let result = await data.save();
  console.log(result,"result after save operation perform");
}
main();