const jwt= require("jsonwebtoken")
const User= require("../models/userModel")

const loginRequired= async(req,res,next)=>{
    const token = req.headers["access-token"]
    if(token){
        const validatoken= await jwt.verify(token,"sagarsinghsolanki")
        if(validatoken){
            res.user=validatoken._id
            next()
        }else{
            console.log("token-expire");
        }
    }else{
        console.log("token not found");
    }
}

const verifyEmail = async(req,res,next)=>{
    try{
        const user= await User.findOne({email:req.body.email})
        if(user.isVarified){
            next()
        }else{
            console.log("plz check your emails to verify your account");
        }
    }
    catch(err){
        res.json({status:false,msg:err.msg});
    }
}
module.exports={loginRequired,verifyEmail}