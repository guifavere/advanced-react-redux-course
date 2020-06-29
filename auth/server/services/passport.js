const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');

// create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify this email and password, call done with the user
  // if it is correct email and password
  // otherwise, call done with false
  User.findOne({ email }, (err, user) => {
    if (err) return done(err);

    if (!user) return done(null, false);


    // compare passwords
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);

      if (!isMatch) return done(null, false);

      return done(null, user);
    })
  })
});

// setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // see if the user ID in the payload exists in out database
  // it it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if (user) return done(null, user);
    
    done(null, false);
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);