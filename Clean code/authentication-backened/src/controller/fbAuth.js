    const passport= require("passport")
  var FacebookStrategy = require('passport-facebook').Strategy;
  const user = require('../models/user');

module.exports = function (passport) {
    passport.use(new FacebookStrategy({
        clientID: 1287805118673504,
        clientSecret: "1c7add97357dafbed50c3c6092ea53ef",
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);

    
        user.findOne({ email: profile.emails }).then((data) => {
            if (data) {
               
                return done(null, data);
            } else {
                // create a user
                user({
                    username: profile.displayName,
                   // email: profile.emails,
                    facebookId: profile.id,
                    password: null,
                    provider: 'facebook',
                    isVerified: true,
                }).save(function (err, data) {
                    return done(null, data);
                });
            }
        });
    }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        user.findById(id, function (err, user) {
            done(err, user);
        });
    });

}