const passport = require('passpost');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('../config');

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
  User.findById(payload.sub, function (err, user) {
    if (err) return done(err, false);

    if (user) return done(null, user);
    
    done(null, false);
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);
