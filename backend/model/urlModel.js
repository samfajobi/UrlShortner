const mongoose = require("mongoose")


const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})


const urlModel = mongoose.model("urlModel", urlSchema)

module.exports = urlModel