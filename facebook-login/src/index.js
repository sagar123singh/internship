require("dotenv").config()
require("./passport-setup")
const express= require("express")
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session= require("express-session")
const app = express();

passport.serializeUser((user,callback)=>{
  callback(null,user);
})


passport.deserializeUser((user,callback)=>{
  callback(null,user);
})



app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'Secret' 
}));

app.get("/",(req,res)=>{res.redirect("/auth/facebook")})


app.get('/auth/facebook',passport.authenticate('facebook',(req,res)=> res.send("successfully logged in"),{ scope: ['profile', 'email'] }));

app.get('/auth/facebook/callback',passport.authenticate('facebook', { successRedirect: '/auth/facebook/success',failureRedirect: '/login' })),
   

app.get('/auth/facebook/success',(req,res)=>{res.send({status:true,msg:"logged in"})})


app.get('/login',(req,res)=>{res.send({status:true,msg:"enter correct credentials"})})

app.listen(3000,()=>console.log("live on 3000 port"))

//