import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    image:{
        publicId:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
       },
    video:{
        publicId:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
       },
       likes:{
        type:Number,
        default:0
       },
       comment:{
        type:Number,
        default:0
       }
})


const postModel = mongoose.model('Posts',postSchema)