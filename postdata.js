const express = require('express')
const app = express()
const dbConnect = require("./mongodb");
const port = 3000

app.use(express.json());//postman se data json format me get krne ka middleware use karainge.

// app.get('/', async (req, res) => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data,'new way');
//     res.send(data);
// });

app.post('/postdata', async (req, res) => {
    let db = await dbConnect();
    const result = await db.insertOne(req.body);
    if(result.acknowledged) {
        res.send({status:200,message:"Data Inserted Successfully"});
    } else {
        res.send({status:201,message:"Error found!"})
    }
});

app.listen(port, () => {
    console.log(`API app listening on port http://localhost:${port}`)
})