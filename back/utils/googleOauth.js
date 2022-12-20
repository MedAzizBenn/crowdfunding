const googleStrategy = require('passport-google-oauth20').Strategy;
const passport= require('passport');
require('dotenv').config();
passport.use(
  new googleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/google/callback",
    scope: ["profile", "email"],
  },
  function(accessToken,refresh,profile,callback){
    console.log(accessToken);
    callback(null,profile);
  }
  )
);
passport.serializeUser((user,done) =>{
  done(null,user);
});
passport.deserializeUser((user,done) =>{
  done(null,user);
});