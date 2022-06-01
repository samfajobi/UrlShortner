const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const urlRoute = require("./route/urlRoute");


const app = express();

app.use(express.json())
 
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then( () => console.log('DB Connection Successful'))
.catch( err => console.log(err))

app.use("/api/url", urlRoute)



const Port = process.env.PORT || 4000

app.listen(Port, () => {
    console.log(`Server is now running on Port ${Port}`)
})