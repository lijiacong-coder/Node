var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

http.createServer(function(req,res){
    var newpath = url.parse(req.url).pathname;
    switch(newpath){
        case "/":
            getIndex(res);
            break;
        case "/img":
            getImg(res);
            break;
        default:
            getFault(res);
            break;
    }
}).listen(3000);

console.log("server start");

function getFault(res){
    res.writeHead(404,{"Content-type":"text/plain"})
    res.end("no found");
}
function getImg(res){
    var indexPath = __dirname + "/static/" + url.parse("123.jpg").pathname;
    var imgData = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"image/jpeg"})
    res.end(imgData);
}
function getIndex(res){
    var indexPath = __dirname+"/static/"+url.parse("index.html").pathname;
    var indexData = fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}