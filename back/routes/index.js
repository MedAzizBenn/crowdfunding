var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/google/callback',passport.authenticate('google',{
  successRedirect: process.env.CLIENT_URI,
  failureRedirect: '/login/failed',
}));

module.exports = router;
