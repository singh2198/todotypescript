const express=require('express')
const app=express()

const {connect} =require('./db/Connect')

require('dotenv').config()



app.listen(process.env.PORT,async()=>{
    try{
        await connect
        console.log("Connect to Mongodb")
    }
    catch(error){
        console.log(error)
    }
})

