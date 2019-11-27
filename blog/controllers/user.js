// 注册功能 reg方法  -- - 把views下的reg.ejs加载到浏览器界面
var User_model = require("../models/user_model.js");


exports.reg = function(req,res,next){
    res.render('reg');
}

exports.do_reg = function(req,res,next){
    var account = req.body.email;
    var nickname = req.body.name;
    var pass = req.body.pwd;
    // console.log(account);
    User_model.insert_name_by_pass(account,pass,nickname,function(err,data){
        console.log(data);
        if(data.affectedRows==1){
            res.redirect("/login");
        }
    })
    
    
    
}