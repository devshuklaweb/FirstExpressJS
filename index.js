const express = require('express')
const path = require("path"); //its required for getting the __dirname
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Blogs app listening on port http://localhost:${port}`)
})

