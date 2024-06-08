const express = require('express')
const app = express()
const dbConnect = require("./mongodb");
const port = 3000

//url: http://localhost:3000/postdata 
//method: get
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data,'new way');
    res.send(data);
});

app.listen(port, () => {
    console.log(`API app listening on port http://localhost:${port}`)
})