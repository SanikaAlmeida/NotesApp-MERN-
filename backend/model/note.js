const mongoose= require('mongoose')
const Schema=mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    content:{
        type:String,
        required:true,
    },
    isPinned:{
        type:Boolean,
        default:false
    },
    user:{
        type:String,
        required:true,
    },
    createdon:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Note',noteSchema)