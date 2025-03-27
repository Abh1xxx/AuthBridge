const { userModel } = require("../model/userModel");

const bcrypt=require('bcrypt');
const generateToken = require("../utilities/generateTokens");

const register=async(req,res)=>{
    try {
        const {name,email,password}= req.body

        if(!name || !email || !password){
            console.log("All Fields are required");
            return res.status(400).json({Error:"All Fields are required"})  
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        // console.log(hashedPassword);        

        const newUser=new userModel({name,email,password:hashedPassword})
       const saved=await newUser.save()
       
       id=saved._id
       const token=generateToken(id)
       // console.log(id);
       res.cookie("userToken",token)

        res.status(201).json({message:"User Created successfully",User:saved  })
    } catch (error) {
        console.log(error);
        res.status(error.status||500).json({Error:error.message||"Internal server ERROR"})
        
    }
}


const login= async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            console.log("All Fields are required");
            return res.status(400).json({Error:"All Fields are required"})  
        }
        const userExist=await userModel.findOne({email})
        if(!userExist)
        {
            console.log("User Do Not Exist IN DATABASE!!!");
            return res.status(400).json({Error:"User Does Not Exist"})
        }

        const passwordMatch=await bcrypt.compare(password,userExist.password)


        if(!passwordMatch){
            console.log("Password DONOT match"); 
            return res.status(400).json({Error:"Password DONOT MATCH"})       
        }
        console.log("Login:Successful");
        
        // Token creating
        id=userExist._id
        const token=generateToken(id)
        // console.log(id);
        res.cookie("userToken",token)


        res.status(200).json({Login:"Successful"})
    } catch (error) {
        console.log(error);
        res.status(error.status||500).json({Error:error.message||"Internal server ERROR"})
    }
}

module.exports={
    register,login
}