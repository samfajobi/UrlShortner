const express = require("express");
const router = express.Router()
const urlModel = require("../model/urlModel")

router.get("/:code", async (req, res) => {

    try {
        const url = urlModel.findOne({
            urlCode: req.params.code
        })

        if (url) {
            res.redirect(url.longUrl)
        } else {
            res.status(404).json("Url Not Found!!")
        }


    } catch(err) {

        console.log(err);
        res.status(501).json("Server Error!!!")

    }


})



exports.module = router;