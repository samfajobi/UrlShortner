const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

const router = express.Router()

const Url = require("/model/urlModel")


const baseUrl = ""

router.post("shorten", (req, res) => {

    const { longUrl } = req.body

})