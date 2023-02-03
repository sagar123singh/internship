const express= require("express")

const passport= require("passport")
const session= require("express-session")
require("dotenv").config()
require("./passport-setup")
const app= express()

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'Secret' 
  }));

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());


app.get("/",(req,res)=>{res.redirect("/auth/google")})

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get( '/auth/google/callback',passport.authenticate( 'google', {successRedirect: '/auth/google/success',failureRedirect: '/auth/google/failure'}));

app.get('/auth/google/success',(req,res)=>{
        res.send({status:true,msg:"logged in"})
})

app.get("/logout",(req,res)=>{
  req.logout();
  req.session.dis
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
