var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const User = require('../models/User')
/*
module.exports=function (passport){
    
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Yanlis Kullanıcı Adı veya Parola.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Yanlis Kullanıcı Adı veya Parola.' });
        }
        return done(null, user);
      });
    }
  ));
    
    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
      
      passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user)=>  done(err, user))
      })
}*/