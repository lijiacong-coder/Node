// 把一个文件读取到内存 fs buffer stream
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

exports.goIndex = function(res){
    var indexPath = __dirname + '/static/' + url.parse("index.html").pathname;   // 加载
    var indexData = fs.readFileSync(indexPath,"utf-8");     //  读入
    res.writeHead(200,{"Content-type":"text/html"});        // 打包
    res.end(indexData);         // 显示
}

exports.goImg = function(res){
    var indexPath = __dirname + '/static/' + url.parse("123.jpg").pathname;   // 加载
    var indexData = fs.readFileSync(indexPath,"utf-8");     //  读入
    res.writeHead(200,{"Content-type":"image/jpeg"});        // 打包
    res.end(indexData);
}

exports.goPost = function(req,res){
    var postData="";
    req.setEncoding("utf8");
    req.addListener("data",function(postChunkData){
        postChunkData+=postChunkData;
    });

    req.addListener("end",function(){
        var strobj = querystring.parse(postData);
        var indexData = "<meta charset='utf-8> 登陆名: "+strobj.unane+" "+"密码: "+strobj.pass;
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indexData);
    })
}

exports.goDefault = function(res){
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("no page founded");
}