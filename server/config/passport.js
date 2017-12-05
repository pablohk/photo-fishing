const LocalStrategy   = require('passport-local').Strategy;
const User            = require('../models/user.model');
const bcrypt          = require('bcrypt');
const passport     = require('passport');

module.exports=(app)=>{
//function configure(passport){
  passport.serializeUser((loggedInUser, next) => {
    next(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, userDocument);
    });
  });

  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!foundUser) {
        next(null, false, { message: 'Incorrect username' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect password' });
        return;
      }

      next(null, foundUser);
    });
  }));
}
//module.exports =configure
