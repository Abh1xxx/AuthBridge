const mongoose=require('mongoose')

const cardSchema =new mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    description:{type:String},
    category:{type:String},
    image:{type:String},
    rating:{
        rate:{type:Number},
        count:{type:Number}
    }
},{timestamps:true})

const cardModel=new mongoose.model("cards",cardSchema)

module.exports={cardModel}