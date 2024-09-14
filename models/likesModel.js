import mongoose from 'mongoose'

const likeSchema = new mongoose.Schema({
    likedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   },
   postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
}

})


const likeModel = mongoose.model('Like',likeSchema)