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
//create api
app.post('/create', async(req,resp)=>{
    let data = new Comments(req.body);
    let result = await data.save();
    resp.send(result);
})
//list api
app.get('/list', async(req,resp)=>{
    let data = await Comments.find();
    resp.send(data);
})
//delete api
app.delete('/del/:id', async(req,resp)=>{
    let data = await Comments.deleteOne({_id:req.params.id});
    resp.send(data);
})
//update api
app.put('/updatedata/:_id', async(req,resp)=>{
    let data = await Comments.updateOne(req.params,
        {
            $set: req.body
        }
    );
    resp.send(data);
})
app.listen(port, () => {
  console.log(`Blogs app listening on port http://localhost:${port}`)
})