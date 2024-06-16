const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
require("dotenv").config()

const port=process.env.PORT
app.use(express.json())
app.use(cors({origin:"*"}))

const url=process.env.DB_URL
const dbconnect= async()=>{
    await mongoose.connect(url).then(()=>{
        console.log('connected')
      }).catch((err)=>{
        console.log(err)
      })
}
dbconnect()
app.listen(port,()=>{
    console.log("Running on port")
})

const userRouter = require('./routes/user')
app.use('/',userRouter)
const noteRouter = require('./routes/note')
app.use('/',noteRouter)

module.exports=app