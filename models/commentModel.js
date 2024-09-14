import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    commentedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
   },
   comment:{
    type:String,
    required:true
   },
   postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
}

})


const commentModel = mongoose.model('Comment',commentSchema)