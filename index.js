const express = require('express')
const app = express()
const dbConnect = require("./mongodb");

//way 1 for calling global dbconnect file and get collection data
// dbConnect.then((resp)=> {
//   resp.find().toArray().then((data)=> {
//     console.warn(data);
//   })
// })

//way-2 for getting collection data
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data,'new way');
}
main();