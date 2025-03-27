const express= require("express");
const { dbConnection } = require("./config/dbConnection");
const userRouter = require("./routes/userRouter");
const cookieparser = require("cookie-parser");
const cors=require('cors');
const productRouter = require("./routes/productRouter");
require('dotenv').config()



const app= express()

// Middleware
app.use(express.json()); // To parse JSON body
app.use(cookieparser())// To parse cookies from requests
app.use(cors({
    origin:process.env.FRONTEND_URL
}))


// Connect to database
dbConnection()


app.use("/user",userRouter)
app.use("/products",productRouter)

app.listen(process.env.PORT,(error)=>{
    if (error) {
        console.log("An Error has occured  --->",error);
    } else {
        console.log("--------------------------------------------------");
        console.log(`🚀 Server is running --> http://localhost:${process.env.PORT}`);
        console.log("--------------------------------------------------");       
    }
})