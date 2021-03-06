const express = require('express')
const validUrl = require('valid-url')
const shortid = require('short-id')

const router = express.Router()

const UrlModel = require("../model/urlModel")


const baseUrl = ""

router.post("/shorten", async (req, res) => {

    const { longUrl } = req.body

    if(!validUrl.isUri(baseUrl)) {
        res.status(401).json("Invalid Url")
    }


    const urlCode = shortid.generate()

    if(validUrl.isUri(longUrl)) {

        try {

            const url = await UrlModel.findOne({longUrl})

            if(url) {
                res.json(url)

            } else {

               const shortUrl =  baseUrl + "/" + urlCode

                const url = new UrlModel({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })

                await url.save();
                res.json(url)    
            }

        } catch(err) {
            console.log(err)
            res.status(500).json("Server Error!!!")

        }

    } else {
        res.status(500).json("Invalid Url")

    }
})


module.exports = router;