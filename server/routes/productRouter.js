const {getProducts} = require("../controllers/cardController")

const productRouter=require('express').Router()

productRouter.get("/getproducts",getProducts)

module.exports=productRouter

