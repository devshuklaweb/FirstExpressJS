const express = require('express')
const app = express()
const dbConnect = require("./mongodb");
const mongodb = require('mongodb');//ye jaruri hai new mongodb.ObjectId iske liye
const port = 3000

/*
API URL: http://localhost:3000/deldata/   
*/
app.use(express.json());
app.delete('/deldata/:id', async (req, res) => {
    let db = await dbConnect();
    const result = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    if(result.acknowledged) {
        res.send({status:200,message:"Data Deleted Successfully"});
    } else {
        res.send({status:201,message:"Error found!"})
    }
});

app.listen(port, () => {
    console.log(`API app listening on port http://localhost:${port}`)
})