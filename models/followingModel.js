import mongoose from 'mongoose'

const followingSchema = new mongoose.Schema({
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   },
   following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
}

})


const followerModel = mongoose.model('Following',followingSchema)