var express = require('express');
const passport = require('passport');
var router = express.Router();
let userModel = require("./users");
let localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});


router.post("/register", function(req, res, next){
  let userdata = new userModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })

  userModel.register(userdata, req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req, req, function(){
      res.redirect("/profile");
    })
  } )
});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}), function(req, res){} );


router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
     return next();
  } 
    res.redirect('/login');
}

module.exports = router;
