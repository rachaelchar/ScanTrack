const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

// Telling passport we want to use a Local Strategy. In other words, we
// want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: 'code',
    passwordField: 'password',
  },
  // this is the function that passport runs when calling
  // passport.authenticate(), the done() function is built into
  // passport.  If the user is authenticated, done() will attach
  // the user to the request object and then call the next function
  // in the login route: (req, res) => { res.json(req.user) },
  // and passing the request along with the user attached

  ((code, password, done) => {
    // When a user tries to sign in this code runs
    // console.log('code', code);
    db.User.findOne({
      where: {
        code,
      },
    }).then((dbUser) => {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: 'Not found.',
        });
      }
      // If there is a user with the given email, but the password
      // the user gives us is incorrect
      // if (!dbUser.validPassword(password)) {
      //   return done(null, false, {
      //     message: 'Incorrect password.',
      //   });
      // }
      // If none of the above, call the done function
      // and pass the user
      return done(null, dbUser);
    });
  }),
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
