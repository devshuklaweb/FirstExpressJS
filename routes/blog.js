const express = require('express')
const router = require(express.Router); //ye include karainge router add karne ke liye

//const path = require("path");
app.get('/', (req, res) => {
    res.sendFile('templates/index.html');
})