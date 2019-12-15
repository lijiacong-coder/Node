var mongoose = require("../models/mongoose.js");
var ObjectID = require("mongodb").objectID;

exports.do_newlogin =async function(req,res,next){
    var name = req.body.name;
    var pass = req.body.pass;

    // console.log("login");

    await new Promise((resolve,reject)=>{
        var wherestr1 = {"name":name,"pass":pass};
        // mongoose-->connection->db->collection("users").find(wherestr1).toArray()
        mongoose.connection.db.collection("users").find(wherestr1).toArray(function(err,result){
            if(err){
                res.json({
                    "errno":0,
                    "errmsg":"数据库查找失败",
                });
            }else{
                console.log(result);
            }        
        })
    })

    await new Promise((resolve,reject)=>{

    })
}