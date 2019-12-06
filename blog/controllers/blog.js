var Blog_model = require("../models/blog_model.js");

exports.index = function(req,res,next){
    // 把index主页加载

    // console.log(req.session);
    var uid = req.session.id;
    Blog_model.show_articles_by_name(uid,function(err,data){
        if(data.length>0){
            // console.log(data);
            res.render("index_logined",{
                'sess':req.session,
                'blogs':data,
            })
        }
    })

    
}

exports.add = function(req,res,next){
    res.render("newBlog");
}