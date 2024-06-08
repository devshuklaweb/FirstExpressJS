const express = require('express')
//code for creating api in mongoose
const mongoose = require("mongoose");
//include config.js
require("./config");
//include commentsModel
const Comments = require('./model/Comments');
const app = express();
const port = 3000

app.use(express.json());
app.post('/create', async(req,resp)=>{
    let data = new Comments(req.body);
    let result = await data.save();
    resp.send(result);
})

app.listen(port, () => {
  console.log(`Blogs app listening on port http://localhost:${port}`)
})