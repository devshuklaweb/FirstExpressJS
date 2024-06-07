//MongoDB connection code
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbname = "devdb";

async function dbConnect() {
  let result = await client.connect();//client.connect already return promise thats why await using
  let db = client.db(dbname);
  return collection = db.collection("comments");
  // let response = await collection.find().toArray(); 
  // console.log(response);
}

module.exports = dbConnect;