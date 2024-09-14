import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   userName:{
    type:String,
    required:true,
    unique:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   profilePic:{
    publicId:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
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


const userModel = mongoose.model('User',userSchema)