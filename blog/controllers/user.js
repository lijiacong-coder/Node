// 注册功能 reg方法  -- - 把views下的reg.ejs加载到浏览器界面
var User_model = require("../models/user_model.js");


exports.reg = function(req,res,next){
    res.render('reg');
}

exports.do_reg = function(req,res,next){
    var account = req.body.email;
    var nickname = req.body.name;
    var pass = req.body.pwd;

    //验证用户名是否重名
    User_model.check_name(account,function(err,data){
        if(data.length > 0){
            res.redirect("/reg");
        }else{
            User_model.insert_name_by_pass(account,pass,nickname,function(err,data){
                console.log(data);
                if(data.affectedRows==1){
                    res.redirect("/login");
                }
            })
        }
    })
}

exports.checkname = function(req,res,next){
    var account = req.body.account;
    User_model.check_name(account,function(err,data){
        if(data.length>0){
            res.send("success");
        }else{
            res.send("error");
        }
    })
}

exports.login = function(req,res,next){
    res.render("login");
}

exports.do_login = function(req,res,next){
    var account = req.body.email;
    var pass=req.body.pwd;

    User_model.get_name_by_pass(account,pass,function(err,data){
        if(data.length>0){
            // console.log("login success");
            req.session.id = data[0].USER_ID;
            req.session.nickname = data[0].NAME;
            // res.send("success");
            // console.log(data);
            res.redirect("/index");
            
            // 登陆成功后 在登陆成功后的界面需要显示已登录 需要一个标志位
            // cookie session
        }
    });
}

exports.index = function(req,res,next){
    res.render("index_logined",{
        'sess':req.session,
    })
}

exports.unlogin = function(req,res,next){
    req.session = null;
    res.redirect("/index");
}