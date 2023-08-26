const express = require("express");
const app = express();

//middleware
const cors = require('cors');
const pool = require('./db');
//to access req.body
app.use(express.json());



app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});