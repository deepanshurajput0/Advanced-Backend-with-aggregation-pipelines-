import mongoose from 'mongoose'

const followersSchema = new mongoose.Schema({
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   },
   follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
}

})


const likeModel = mongoose.model('Follower',followersSchema)