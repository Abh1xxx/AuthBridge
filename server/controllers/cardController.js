const { cardModel } = require("../model/cardModel");

const getProducts=async(req,res)=>{
    try {
        const product= await cardModel.find()
        return res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(error.status||500).json({error:error.message||"Internal server ERROR"})
        
    }
}
module.exports={getProducts}