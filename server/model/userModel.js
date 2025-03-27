const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:15
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    }
},{timestamps:true})

const userModel=new mongoose.model("user",userSchema)

module.exports={userModel}