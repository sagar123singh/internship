require("dotenv").config()
const passport= require("passport")
const FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
    
    clientID:1287805118673504,
    clientSecret:"1c7add97357dafbed50c3c6092ea53ef",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id','gender','profileUrl','displayName', 'photos', 'email']
   
  },
  function(accessToken, refreshToken, profileFields, done) {
    console.log(profileFields)
   console.log(accessToken)
    return done(null, profileFields);
  }
  ));
