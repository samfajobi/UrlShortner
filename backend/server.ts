const express = require("express");
const mongoose = require("monogoose");
const dotenv = require("dotenv");


const app = express()


dotenv.config()


const Port = process.env.PORT

app.listen(process.env.PORT, () => {
    console.log(`Server is now running on Port${Port}`)
})