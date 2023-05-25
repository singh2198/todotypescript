const express=require('express')
const mongose=require('mongoose')
require('dotenv').config()
const connect=mongose.connect(process.env.MONGOURL)

module.exports={connect}