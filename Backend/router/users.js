const express = require('express');
var passport = require('passport');
const router = express.Router();
const register = require('../controllers/users');
const partners = require('../controllers/partners');

router.post(
    '/register',
    register.addUser
);

router.post('/login', function(req,res, next) {
    passport.authenticate('local', function(err, user, info) {
        if(err) { return res.status(501).json(err); }
        if(!user) { return res.status(501).json(info);}
        req.logIn(user, function(err) {
            if(err) { return res.status(501).json(err);}
            return res.status(200).json({message: 'Login Success'});
        });
    })(req, res, next);
});

router.get('/user', isValidUser, function(req,res,next) {
    return res.status(200).json(req.user); 
});

router.post(
    "/getpartners",
    partners.getPartners
);

router.get('/users', isValidUser,
            register.getUsers
)

router.post(
    "/add",
    partners.addPartner
);

router.get('/logout', isValidUser, function(req,res,next) {
    req.logout();
    return res.status(200).json({message: 'Logout Success'});
});



function isValidUser(req, res, next) {
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message: 'Unauthorized Request'});
}

module.exports = router;