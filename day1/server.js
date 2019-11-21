var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req,res){
    var newpath = url.parse(req.url).pathname;

    if(newpath == "/"){
        // 文件路径
        var indexurl=__dirname+'/static/' + url.parse("index.html").pathname;
        // 把文件读入到内存
        var indexPage = fs.readFileSync(indexurl,'utf-8');
        // 将文件打成数据包
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indexPage);
    }else if(newpath == "/parse"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("del parse");
    }else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("no page found");
    }


    /*// 文件路径
    var indexurl=__dirname+'/static/' + url.parse("index.html").pathname;
    // 把文件读入到内存
    var indexPage = fs.readFileSync(indexurl,'utf-8');
    // 将文件打成数据包
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexPage);*/


}).listen(3000);

console.log("server start port 3000");

