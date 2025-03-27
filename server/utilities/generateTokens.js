const jwt=require("jsonwebtoken")

const generateToken=(id)=>{
    const token=jwt.sign({id},process.env.JWT_SECRETE)
    return token
}

module.exports=generateToken