const mongoose = require("mogoose")


const urlSchema = new mongoose.Schema({

})


const urlModel = mongoose.model("urlModel", urlSchema)

module.exports = urlModel