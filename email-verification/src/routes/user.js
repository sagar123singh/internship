const express= require("express")
const router = express.Router()
const mongoose= require("mongoose")
const crypto=require("crypto")
const User= require("../models/userModel")
const cookieParser= require("cookie-parser")
const bcrypt= require("bcrypt")

const jwt= require("jsonwebtoken")
const nodemailer= require("nodemailer")
const {verifyEmail}=require("../jwt/jwt")


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "sagar1ted@gmail.com",
      pass: "mqqyzkbcaqupdryx"
    },
    tls:{
        rejectUnauthorized:false
    }
  });




router.post("/register",async(req,res)=>{
    try{
        const body= req.body
        const {name,email,password}= body
        console.log(name)
        const user= new User({
            name,
            email,
            password,
            emailToken : crypto.randomBytes(64).toString('hex'),
            isVarified:false
        })

        const salt= await bcrypt.genSalt(10)
        const hashPassword= await bcrypt.hash(user.password, salt)
        user.password= hashPassword
        const newUser= await user.save()


  var mailOptions ={
    from: "sagar1ted@gmail.com",
    to: "s9813558351@gmail.com",
    subject: "verify your email",
    html:`<h2>${user.name}! thanks for registering on our site</h2>
    <h4>please verify emails to continue..../</h4>
    <a href="http://${req.headers.host}/user/verify-email?token=${user.emailToken}">verify your email </a>`
            ,
  };
  transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("verification email is sent to your email account " + info.response)
    }
  });

        res.json({status:false,data:newUser})
        
    }catch(err){
        res.json({status:false,msg:"server error"})
    }
})

const createToken= (id)=>{
    return jwt.sign({id}, "sagarsinghsolanki")
}


router.get('/verify-email',async(req,res)=>{
    try{
        const token= req.query.token
        const user= await User.findOne({emailToken:token})
        if(user){
            user.emailToken=null
            user.isVarified=true
            await user.save()
            res.json({status:true,msg:"done"})
        }else{
            
            res.json({status:false,msg:"email is not verified"})
        }
    }catch(err){
        res.json({status:false,msg:err.msg})
    }
})



router.post("/login",verifyEmail,async(req,res)=>{ 
    try{
            const {email,password}= req.body
            const findUser= await User.findOne({email:email})
            if(findUser){
                const match= await bcrypt.compare(password,findUser.password)
                if(match){
                    const token= createToken(findUser._id)
                    res.header("access-token", token)
                       // res.cookieParser('access-token',token)
                        //res.json({status:true,data:token})
                        
                    res.json({status:true,msg:"you have successfully logged in"})
                }else{
                    res.json({status:false,msg:"invalid password"})
                } 
            }
                else{
                    res.json({status:false,msg:"you are not registered"})
                }

    }catch(err){
        res.json({status:false,msg:"server error",msg:err.msg})
    }
})
module.exports= router
