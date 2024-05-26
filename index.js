const express = require('express')
const path = require("path"); //its required for getting the __dirname
const app = express()
const port = 3000

//serve my public folder directory
//app.use(express.static(path.join(__dirname,"public")))

//create a custome middleware
const devMiddleware = (res,req,next) => {
    console.log(req);
    next() //iske bad koi aur middleware hotoh run ho jaye
}

//for register middleware
app.use(devMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html')); //for showing html page
    // res.status(200);//for sending status
   //res.json({name:"devendra",age:"shukla"});
})

app.get('/contact', (req, res) => {
res.send('Contact Page')
})  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

