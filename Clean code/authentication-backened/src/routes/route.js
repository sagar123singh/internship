const express=require("express")
const router= express.Router()
const passport = require('passport');
const User=require("../models/user")

const bcrypt= require("bcrypt")
const crypto=require("crypto")
const nodemailer= require("nodemailer")
require('../controller/passportLocal')(passport);
require("../controller/googleAuth")(passport);
require("../controller/fbAuth")(passport)

////**************************************************************************************************************************************/
////************************************************Mail Credentials*********************************************************************/
///************************************************************************************************************************************ */

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


///************************************************************************************************************************************ */
///************************************************************************************************************************************ */


 router.post("/register",async(req,res)=>{
    try{
        const body=req.body
        /////////////////////////////validations////////////////////////////////////
    const requiredField=["email","username","password","confirmpassword"]
    for(i=0;i<requiredField.length;i++){
        if(body[requiredField[i]]===undefined){
            res.status(400).json({status:false,msg:`${requiredField[i]} is required`})
        }else if(body[requiredField[i]]===null || body[requiredField[i]]===" "){
            res.status(400).json({status:false,msg:`please enter ${requiredField[i]}`})
        }
    }
   
     if (!(/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/).test(body.email.trim())) {
     return res.status(400).json({ status: false, message: 'Enter a valid Email Id' });
     }

     const repeatedEmail= await User.findOne({email:body.email})
     if(repeatedEmail){
        return res.status(400).json({status:false,msg:"Account already registered with this"})
     }

     if(body.password !== body.confirmpassword){
        return res.status(400).json({ status: false, message: 'password doesnot match' });
    }
    if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(body.password)){
        return res.status(400).json({status:false,message:"please enter alphanumeric and lowercase password"})
    }
    if (!(body.password.length > 8 && body.password.length <= 15)) {
        return res.status(400).json({status: false,message: 'Minimum password should be 8 and maximum will be 15'});
    }
    body.password = bcrypt.hashSync(body.password, 10);
    let user=new User({
        username: body.username,
        email: body.email,
        password:body.password,
        googleId: null,
        provider: 'email',
        emailToken : crypto.randomBytes(64).toString('hex'),
        isVarified:false
    })
   
    //////////////////////////////////data registering /////////////////////////
     const registerData= await user.save()
     
    

  var mailOptions ={
    from: "sagar1ted@gmail.com",
    to: "s9813558351@gmail.com",
    subject: "verify your email",
    html:`<h2>${user.username}! thanks for registering on our site</h2>
    <h4>please verify emails to continue..../</h4>
    <a href="http://${req.headers.host}/verify-email?token=${user.emailToken}">verify your email </a>`
            ,
  };

    
  transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("verification email is sent to your email account " + info.response)
    }
  });
  res.status(201).json({status:true,msg:"registered successfully",data:registerData})  
    }catch(err){
        res.status(500).json({status:false,msg:err.msg})
        console.log("errrrrrr",err)
    }
});

router.get('/verify-email',async(req,res)=>{
    try{
        const token= req.query.token
        const user= await User.findOne({emailToken:token})
        if(user){
            user.emailToken=null
            user.isVerified=true
            await user.save()
            res.json({status:true,msg:"verified successfully"})
        }else{
            
            res.json({status:false,msg:"email is not verified"})
        }
    }catch(err){
        res.json({status:false,msg:err.msg})
    }
})



///***********************************************************************************************************************************************/
//**********************************************************Google Authentication****************************************************************/
//**********************************************************************************************************************************************/
router.get("/signIn",(req,res)=>{res.redirect("/auth/google")})
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email',] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' , successRedirect: '/profile'}));

///**********************************************************************************************************************************************/
//**********************************************************************************************************************************************/
///********************************************************************************************************************************************/



///***********************************************************************************************************************************************/
//**********************************************************facebook Authentication****************************************************************/
//**********************************************************************************************************************************************/


router.get('/auth/facebook',passport.authenticate('facebook',(req,res)=> res.send("successfully logged in"),{ scope: ['profile', 'email'] }));
router.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect: '/auth/facebook/success',failureRedirect: '/login' })),
router.get('/auth/facebook/success',(req,res)=>{res.send({status:true,msg:"logged in"})})

///**********************************************************************************************************************************************/
//**********************************************************************************************************************************************/
///***********************************************************************************************************************************************/
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
        failureFlash: true,
    })(req, res, next);
});


///**********************************************************************************************************************************************/
//**********************************************************************************************************************************************/
///********************************************************************************************************************************************/


router.get('/profile',  async(req, res) => {
    // adding a new parameter for checking verification
    try{
    let profil=await User.findOne()
    res.send({msg:"welcome on dashboard",data:profil})

}catch(err){
    res.send({status:false,msg:"server error"})
        console.log("errrrrr",err);
}
})

module.exports=router


///**********************************************************************************************************************************************/
//**********************************************************************************************************************************************/
///***********************************************************************************************************************************************/