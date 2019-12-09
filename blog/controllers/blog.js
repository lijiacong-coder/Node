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
    // 调用blog_modul下得查询方法
    var uid = req.session.id;
    Blog_model.sel_cata_by_uid(uid,function(err,data){
        if(data.length>0){
            res.render("newBlog",{
                'sess':req.session,
                'catas':data,
            });
        }
    })
}

exports.add_catalog=function(req,res,next){
    var uid = req.session.id;
    Blog_model.sel_cata_by_uid(uid,function(err,data){
        if(data.length>0){
            res.render("blogCatalogs",{
                'sess':req.session,
                'catas':data,
            });
        }
    })
}

exports.addBlogCatalog = function(req,res,next){
    // post提交 用req.body接受
    var uid = req.session.id;
    var cataname=req.body.name;
    // 添加分类的方法 
    Blog_model.insert_catalog(cataname,uid,function(err,data){
        if(data.affectedRows == 1){
            res.render("blogCatalogs");
        }
    })
}

// 修改分类名
exports.editCatalog= function(req,res,next){
    var cid = req.query.cid;
    Blog_model.sel_catadata(cid,function(err,data){
        if(data.length>0){
            res.render("editCatalog",{
                'sess':req.session,
                'cata':data[0],
            })
        }
    });
    
}


exports.updateCatalog = function(req,res,next){
    var cid = req.body.hcid;
    var cname = req.body.name;
    Blog_model.update_cataname(cid,cname,function(err,data){
        if(data.affectedRows == 1){
            res.redirect("/blogCatalogs");
        }
    })
}