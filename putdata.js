const express = require('express')
const app = express()
const dbConnect = require("./mongodb");
const port = 3000

/*
API URL: http://localhost:3000/putdata/Deepu-101
Body -> Raw:
{
    "Name": "Deepu-Kumar",
    "Address": "Rajapur Cili",
    "age": 14
}   
*/
app.use(express.json());
app.put('/putdata/:name', async (req, res) => {
    let db = await dbConnect();
    const result = await db.updateOne(
        {Name: req.params.name},
        { $set: req.body }
    );
    if(result.acknowledged) {
        res.send({status:200,message:"Data Updated Successfully"});
    } else {
        res.send({status:201,message:"Error found!"})
    }
});

app.listen(port, () => {
    console.log(`API app listening on port http://localhost:${port}`)
})