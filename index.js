const express = require('express')
const app = express()
const port = 3000

//MongoDB connection code
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
//const url = 'mongodb://127.0.0.1:27017/dbname'; //we can directly pas dbname 
const client = new MongoClient(url);
const dbname = "devdb";

async function getConnect() {
  let result = await client.connect();//client.connect already return promise thats why await using
  let db = client.db(dbname);
  let collection = db.collection("comments");
  let response = await collection.find().toArray(); 
  console.log(response);
}

getConnect();//for calling

// app.get('/', (req, res) => {  
//   res.send('My DB Connections');
// })

// app.listen(port, () => {
//   console.log(`Node with mongodb app listening on port http://localhost:${port}`)
// })

