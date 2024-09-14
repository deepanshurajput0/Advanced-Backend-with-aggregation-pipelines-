import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   color:{
    type:String,
    required:true
   },
   createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   },
   subTodos:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubTodo'
    }
   ]
})


const userModel = mongoose.model('Todos',todoSchema)