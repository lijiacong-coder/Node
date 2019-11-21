var http = require("http");
var url = require("url");
var Coon = require("./coon");

http.createServer(function(req,res){
    var newpath = url.parse(req.url).pathname;
    switch(newpath){
        case '/':
            Coon.getIndex(res);
            break;
        case '/add':
            Coon.goPost(req,res);
            break;
        case '/img':
            Coon.goImg(res);
            break;
        default:
            goDefault(res);
            break;    
    }
}).listen(3000);

console.log("server start port 3000");