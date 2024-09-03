var User = require('./models/users');

var Passport  = require("passport")
    , LocalStrategy = require('passport-local').Strategy;

    Passport.use('local', new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },
        function(username, password, done) {
            User.findOne({ email: username}, function(err, user) {
                if(err) { return done(err);}
                if(!user) {
                    return done(null, false, { message: 'Incorrect username'});
                };
                if(!user.isValid(password)) {
                    return done(null, false, { message: 'Incorrect Password'});
                }
                return done(null, user);
            });
        }
    ));

    Passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    Passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        })
    })