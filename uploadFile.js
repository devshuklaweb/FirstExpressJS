const express = require('express')
const multer = require("multer")
const app = express();
const port = 3000

//middleware for upload file
const uploadFilesMiddleware = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "uploads");//uploads is a folder for uploading
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "_" + Date.now() + ".jpg");
        }
    })
}).single("upload_photo");//for uploading single image and postman fieldname: imageFields
app.post('/uploadMyFile', uploadFilesMiddleware, async (req, resp) => {
    resp.send("Files uploaded successfully");
})
app.listen(port, () => {
    console.log(`Blogs app listening on port http://localhost:${port}`)
})