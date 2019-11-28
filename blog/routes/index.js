var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');

function checklogin(req,res,next){
  if(req.session.id){
    next();
  }else{
    res.redirect("/login");
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg',User.reg);
router.post("/reg",User.do_reg);

router.get("/login",User.login);
router.post("/login",User.do_login);
router.get("/unlogin",User.unlogin);

router.post("/check",User.checkname);

router.get("/index",checklogin);
router.get("/index",User.index);

module.exports = router;
