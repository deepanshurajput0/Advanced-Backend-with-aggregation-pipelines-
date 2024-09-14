import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
   userName:{
    type:String,
    required:true,
    unique:true
   },
   email:{
    type:String,
    required:true,
    unique
   },
   password:{
    type:String,
    required:true
   },
   friends:{
     type:Number,
     default:0
   },
   followers:{
    type:Number,
    default:0
   }
})


const userModel = mongoose.model('Todos',todoSchema)