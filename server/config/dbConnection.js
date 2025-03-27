//38glJMIbtrh8xCGP
const mongoose=require('mongoose')

const dbConnection=async()=>{
    try { 
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connection successfull");
        console.log("--------------------------------------------------");

    } catch (error) {
     console.log("An error has Occured -->",error);
    }
}

module.exports={dbConnection}